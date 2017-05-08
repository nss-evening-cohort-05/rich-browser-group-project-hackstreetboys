var movieAPI = (function (oldDom) {


	oldDom.writeDom = (apiKeys) => { 
		movieAPI.getMovies(apiKeys).then((movies) => {
			let domString = `<div class="row">`;
			movies.forEach((movie, index) => {
				if (index !== 0 && index % 3 === 0) {domString += `</div><div class="row">`;}
				domString += movieAPI.buildPanel(movie);
			});
			domString += "</div>";
			$("#movie-display").html(domString);
		}).catch((error) => {
			console.log("error in get movies", error);
		});
	};

	oldDom.buildPanel = (movie) => {
		let panelString = ""; 
		panelString += `<div class="col-xs-4 movieCard" id="${movie.id}">
											<div class="panel panel-default">
												<div class="panel-heading">
													<h3 class="panel-title">${movie.movieName}</h3>
	  										</div>
	  										<div class="panel-body">
	  											<p>Released ${movie.year}</p>
	    										<p>Starring ${movie.actors}</p>`;
	  											if (movie.watched === true) {
	  		panelString += 		`<div class="form-group form-inline">
    												
													<div class="dropdown">
													  <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
													    Rating													    <span class="caret"></span>
													  </button>
													  <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
													    <li><a href="#" class="ratingDropDown">1 - Stinker!</a></li>
													    <li><a href="#" class="ratingDropDown">2 - No</a></li>
													    <li><a href="#" class="ratingDropDown">3 - Meh</a></li>
													    <li><a href="#" class="ratingDropDown">4 - Yes</a></li>
													    <li><a href="#" class="ratingDropDown">5 - Awesome!</a></li>
													  </ul>
													</div> 
		    										<h4 class="rated">${movie.rating}</h4>
  												</div>
	  											<button class="btn btn-sm btn-success col-xs-4 watchedButton">Watched</button>
	  											<button class="btn btn-sm btn-primary col-xs-4 col-xs-offset-4 deleteButton">Delete</button>`;
	  											} else {
	  		panelString += 		`<div class="form-group form-inline">
    												<label>Rating</label>
    												<input type="text" class="form-control rating-input" value="Haven't Seen it!" disabled>
  												</div>
  												<button class="btn btn-sm btn-danger col-xs-4 notWatchedButton">Not Watched</button>
	  											<button class="btn btn-sm btn-primary col-xs-4 col-xs-offset-4 deleteButton">Delete</button>`;
	  											}
	  		panelString +=   `</div>
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
    });
    
  };

	return oldDom;
})(movieAPI || {});