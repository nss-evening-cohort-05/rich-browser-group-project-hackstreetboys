$(document).ready(function() {

	let apiKeys = {};

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

    $('#getMovie').click((event) => {
        let movieTitle = $('#movieSearch').val();
        movieAPI.getMovie(movieTitle).then((results) => {
            console.log("Movie API results:", results);
        }).catch((error) => {
            console.log("getMovie Error", error);
        });
    });

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
            // movieAPI.writeDom(apiKeys);
            // movieAPI.createLogoutButton(apiKeys);
        }).catch((error) => {
            console.log(error);

        });
    });


    //CLICK event to fire logoutUser. Calls movieAPI.logoutUser
    

    //CLICK event to add movie to database.  Calls movieAPI.addMovie .then swap view and WriteDom

    //CLICK event to delete movie from database.  Calls movieAPI.deleteMovie .then WriteDom

    //CLICK event to update rating. Calls movieAPI.editMovie .then WriteDom

    //CLICK event to update "watched". Calls movieAPI.editMovie .then WriteDom

    //CLICK event to Switch to ADD MOVIE View

    //CLICK event to Switch to SAVED MOVIES View

});