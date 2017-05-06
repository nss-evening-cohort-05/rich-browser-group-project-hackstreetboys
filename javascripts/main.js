$(document).ready(function() {

  $('#getMovie').click((event) => {
    let movieTitle = $('#movieSearch').val();
    movieAPI.getMovie(movieTitle).then((results) =>{
      console.log("Movie API results:", results);
    }).catch((error) => {
      console.log("getMovie Error", error);
    });
  });

  //CLICK event to fire registerUser. Calls movieAPI.registerUser

  //CLICK event to fire loginUser. Calls movieAPI.loginUser

  //CLICK event to fire logoutUser. Calls movieAPI.logoutUser

  //CLICK event to add movie to database.  Calls movieAPI.addMovie .then swap view and WriteDom

  //CLICK event to delete movie from database.  Calls movieAPI.deleteMovie .then WriteDom

  //CLICK event to update rating. Calls movieAPI.editMovie .then WriteDom

  //CLICK event to update "watched". Calls movieAPI.editMovie .then WriteDom

	//CLICK event to Switch to ADD MOVIE View

	//CLICK event to Switch to SAVED MOVIES View

});
