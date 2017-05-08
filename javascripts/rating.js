var movieAPI = ((rating) => {
	let ratingString = "";
	let ratingValue = 0;

	// rating.showMeOne = () => {
	// 	$("#btn-group").addClass("hidden");
	// 	$(".one").removeClass("hidden");
	// }

	rating.movieReview = () => {
		ratingString =`
			<h6>Rating</h6>			
			<div class="btn-group" data-toggle="buttons">
				<button class="btn btn-warning" id="button1">1</button>   
				<button class="btn btn-warning" id="button2">2</button>   
				<button class="btn btn-warning" id="button3">3</button>   
				<button class="btn btn-warning" id="button4">4</button>   
				<button class="btn btn-warning" id="button5">5</button>`   
			// <div class="one hidden">
			// 	<h1>1</h1>
			// 	<h4>Stinker!</h4>
			// </div>`

		return ratingString;
	};

		



	// $("#button1").click(rating.showMeOne);
	return rating;

})(movieAPI || {});