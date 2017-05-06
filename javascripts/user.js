// var movieAPI = (function (oldUser) {

// 	oldUser.getMovies = (apiKeys) => {
// 		let uid = movieAPI.credentialsCurrentUser().uid;
// 		let movies = [];
// 		return new Promise((resolve, reject) => {
// 			$.ajax(`${apiKeys.databaseURL}/movies.json?orderBy="uid"&equalTo="${uid}"`)
// 			.done(response => {
// 				Object.keys(response).forEach((key) => {
// 					response[key].id = key;
// 					movies.push(response[key]);
// 				});
// 				resolve(movies);
// 			})
// 			.fail(error => {reject(error);});
// 		});
// 	};

// 	oldUser.editMovie = (apiKeys, movie, id) => {
// 		movie.uid = movieAPI.credentialsCurrentUser().uid;
// 		return new Promise ((resolve, reject) => {
// 			$.ajax({
// 				method: "PUT",
// 				url: `${apiKeys.databaseURL}/movies/${id}.json`,
// 				data: JSON.stringify(movie)
// 			})
// 			.done(() => {
// 				resolve();
// 			})
// 			.fail((error) => {
// 				reject(error);
// 			});
// 		});
// 	};

// 	oldUser.deleteMovie = (apiKeys, id) => {
// 		return new Promise ((resolve, reject) => {
// 			$.ajax({
// 				method: "DELETE",
// 				url: `${apiKeys.databaseURL}/movies/${id}.json`
// 			})
// 			.done(() => {
// 				resolve();
// 			})
// 			.fail((error) => {
// 				reject(error);
// 			});
// 		});
// 	};

// 	//MAKE SURE THIS GETS APIKEYS AND A NEWMOVIE OBJECT
// 	oldUser.addMovie = (apiKeys, newMovie, id) => {
// 		newMovie.uid = movieAPI.credentialsCurrentUser().uid;
// 		return new Promise((resolve, reject) => {
// 			$.ajax({
// 				method: "POST",
// 				url: `${apiKeys.databaseURL}/movies.json`,
// 				data: JSON.stringify(newMovie)
// 			})
// 			.done(() => {
// 				resolve();
// 			})
// 			.fail((error) => {
// 				reject(error);
// 			});
// 		})
// 	};
	

// 	return oldUser;
// })(movieAPI || {});