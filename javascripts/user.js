var movieAPI = (function (oldUser) {

	oldUser.editMovie = () => {
		//PROMISE that uses AJAX call to UPDATE movie in database
		//Handles "watched" and "rating"
		//use a PUT http call
	};

	oldUser.deleteMovie = () => {
		//PROMISE that uses AJAX call to DELETE movie in database
		//Handles "delete" button functionality
		//Called in main.js
		//use a DELETE http call

	};

	oldUser.addMovie = () => {
		//PROMISE that uses AJAX call to ADD movie in database
		//Handles "Save" button functionality
		//Called in main.js
		//use a POST http call
	};

	


	

	return oldUser;
})(movieAPI || {});