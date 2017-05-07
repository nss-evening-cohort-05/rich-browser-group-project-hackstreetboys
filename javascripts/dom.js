var movieAPI = (function (oldDom) {


	oldDom.writeDom = (apiKeys) => { 
		movieAPI.getMovies(apiKeys).then((movies) => {
			let domString = "";
			movies.forEach((movie) => {
				domString += movieAPI.buildPanel(movie);
			});
			$("#movie-display").html(domString);
		}).catch((error) => {console.log("error in get movies", error);});
	};

	oldDom.buildPanel = (movie) => {
		console.log(movie);
		let panelString = ""; 
		panelString += `<div class="panel panel-default col-md-4">
											<div class="panel-heading">
												<h3 class="panel-title">${movie.name}</h3>
	  									</div>
	  									<div class="panel-body">
	  									Released in ${movie.yearRelease}<br>
	    									Starring ${movie.actor[0]}
	  									</div>
	  									<div class="rating-holder">
	  									
	  									</div>
	  								</div>`;
		return panelString;
	};

	oldDom.logout = (apiKey) => {
    let uid = movieAPI.credentialsCurrentUser().uid;
    movieAPI.getUser(apiKey, uid).then((user) => {
	firebase.auth().signOut();
	console.log("you are now logged out");
    // let logoutButton = `<button class="btn btn-danger" id="logoutButton">LOGOUT ${user.username}`;
  // $('#logout-container').html(logoutButton);
    }).catch((error) => {
    	console.log("logout error", error);
    })
    
  };

	return oldDom;
})(movieAPI || {});