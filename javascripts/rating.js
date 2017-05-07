var movieAPI = ((rating) => {
	let ratingString = "";
	let ratingValue = 0;

	rating.movieReview = () => {
		ratingString =`
			<h6>Rating</h6>
			
			<div class="btn-group" data-toggle="buttons">   
			    <label class = "btn btn-warning" for="star1" title="Stinker! - 1 star">
			    <input type="radio" id="star1" name="rating" value="1" />1</label>			    
			    <label class = "btn btn-warning" for="star2" title="Kinda bad - 2 stars">
			    <input type="radio" id="star2" name="rating" value="2" />2</label>
			    <label class = "btn btn-warning" for="star3" title="Meh - 3 stars">
			    <input type="radio" id="star3" name="rating" value="3" />3</label>
			    <label class = "btn btn-warning" for="star4" title="Pretty good - 4 stars">
			    <input type="radio" id="star4" name="rating" value="4" />4</label>
			    <label class = "btn btn-warning" for="star5" title="Awesome - 5 stars">
			    <input type="radio" id="star5" name="rating" value="5" />5</label>
			</div>`;

		return ratingString;
	};

	rating.captureValue = (event) => {
		console.log("event.target.innerHTML", event.target);
	};

	$(".btn-warning").click(rating.captureValue);
	return rating;

})(movieAPI || {});