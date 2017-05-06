var movieAPI = (function (oldDom) {

	oldDom.writeDom = (movies) => { //takes array of movies
		let domString = "";
		movies.forEach((movie) => {
			domString += movieAPI.buildPanel(movie);
		});
		$("#movie-display").html(domString);
	};

	oldDom.buildPanel = (movie) => {
		let panelString = ""; 
		panelString += `<div class="panel panel-default">
											<div class="panel-heading">
												<h3 class="panel-title">Panel title</h3>
	  									</div>
	  									<div class="panel-body">
	    									Panel content
	  									</div>
										</div>`;
		return panelString;
	};

	return oldDom;
})(movieAPI || {});