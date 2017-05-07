$(document).ready(function() {
	
	let apiKeys = {};
    let movie = Object();

    
    let clearLogin = () => {
        $('#inputEmail').val("");
        $('#inputPassword').val("");
        $('#inputUsername').val("");
    };

    movieAPI.firebaseCredentials().then((keys) => {
        apiKeys = keys;
        firebase.initializeApp(apiKeys);
        //FbApi.writeDom(apiKeys);
    }).catch((error) => {
        console.log("key errors", error);
    });

    //Bao
    $('#getMovie').click((event) => {
        let movieTitle = $('#movieSearch').val();
        movieAPI.getMovie(movieTitle).then((results) => {
            console.log("Movie API results:", results);
            if (results.Response == "False"){
                 $("#saved-view").removeClass('hide');

                $("#saved-view").html(`<div class="row col-xs-4 col-xs-offset-4" style="margin-top: 15px; color: red; font-size: 25px; font-weight: bolder;">${results.Error}</div>`);
            }else {
                movie.movieName = results.Title;
                movie.rating = "";
                movie.yearRelease = results.Released; 
                movie.actors = results.Actors;
                let movieString = `<div class="row col-xs-4 col-xs-offset-4" style="background-color: #fca27e ; border: 1px solid blue; margin-top: 15px;">`;
                movieString += `<h3>${movie.movieName}</h3>`;
                movieString += `<p>Released: ${movie.yearRelease}</p>`;
                movieString += `<p>Actors: ${movie.actors}</p>`;
                movieString += `<p>Rating: ${movie.rating}</p>`; 
                movieString += `<button class="btn btn-primary col-xs-2 addMovie" id="addMovie">Save</button>`;
                movieString += `</div>`;

                $("#saved-view").html(movieString);
                $("#saved-view").removeClass('hide');

            };

        }).catch((error) => {
            console.log("getMovie Error", error);
        });
    });
    //Bao

    //CLICK event to fire registerUser. Calls movieAPI.registerUser
    $('#registerButton').click((event) => {
        let email = $('#inputEmail').val();
        let password = $('#inputPassword').val();
        let username = $('#inputUsername').val();
        let user = {
            email,
            password
        };
        movieAPI.registerUser(user).then((response) => {
            let newUser = {
                uid: response.uid,
                username: username
            };
            movieAPI.addUser(apiKeys, newUser).then((response) => {
                movieAPI.loginUser(user).then((response) => {
                    clearLogin();
                    $('#login-container').addClass('hide');
                    $('.main-container').removeClass('hide');
                    movieAPI.writeDom(apiKeys);
                }).catch((error) => {
                    console.log("error in loginUser", error);
                });
            }).catch((error) => {
                console.log("error in addUser", error);
            });

        }).catch((error) => {
            console.log("error in register", error);
        });
    });

    //CLICK event to fire loginUser. Calls movieAPI.loginUser
    $('#loginButton').click(() => {
        let email = $('#inputEmail').val();
        let password = $('#inputPassword').val();

        let user = {
            email,
            password
        };

        movieAPI.loginUser(user).then((response) => {
            clearLogin();
            $('#login-container').addClass('hide');
            $('.main-container').removeClass('hide');
            movieAPI.writeDom(apiKeys);
            // movieAPI.createLogoutButton(apiKeys);
        }).catch((error) => {
            console.log("error in Login user", error);

        });
    });


    //CLICK event to fire logoutUser. Calls movieAPI.logoutUser
    

    //CLICK event to add movie to database.  Calls movieAPI.addMovie .then swap view and WriteDom
    //Bao
    $('.main-container').on('click', '.addMovie', (e) => {    
        movieAPI.saveMovie(apiKeys, movie).then(() => {
        $("#saved-view").append(`<div class="row col-xs-4 col-xs-offset-4" style="margin-top: 15px; color: red; font-size: 25px; font-weight: bolder;">Movie ${movie.movieName}  saved !</div>`);

        $(e.target).remove();

          }).catch((error) => {
            console.log("saveMovie error", error);

          }); 
    });

    //CLICK event to delete movie from database.  Calls movieAPI.deleteMovie .then WriteDom

    //CLICK event to update rating. Calls movieAPI.editMovie .then WriteDom

    //CLICK event to update "watched". Calls movieAPI.editMovie .then WriteDom

    //CLICK event to Switch to ADD MOVIE View
    $("#new-movie").click(() => {
        $("#saved-view").addClass("hide");
        $("#search-view").removeClass("hide");
    });

    //CLICK event to Switch to SAVED MOVIES View
    $("#saved-movies").click(() => {
        $("#search-view").addClass("hide");
        $("#saved-view").removeClass("hide");
        
    });

    


});