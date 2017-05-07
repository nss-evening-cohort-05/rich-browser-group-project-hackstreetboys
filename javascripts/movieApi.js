var movieAPI = (function (movieCall) {

	movieCall.getMovie = function (searchValue) {
		return new Promise((resolve, reject) =>{
			$.ajax({
				method:"GET",
				url:`http://www.omdbapi.com/?t=${searchValue}&y=&plot=short&r=json`
			}).then((response)=>{
				resolve(response);
			},(error)=>{
				reject(error);
			});
		});
	};

	//Bao
	movieCall.saveMovie = (apiKeys, newMovie) => {
	newMovie.uid = movieAPI.credentialsCurrentUser().uid;
		return new Promise ((resolve, reject) => {
			$.ajax({
				method: 'POST',
				url:`${apiKeys.databaseURL}/items.json`,
				data: JSON.stringify(newMovie)
			}).done(() => {
				resolve();
			}).fail((error) => {
				reject(error);
			});
		});
	};
	//Bao

	return movieCall;
})(movieAPI || {});