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

	return movieCall;
})(movieAPI || {});