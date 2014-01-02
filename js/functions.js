$(document).ready(function() {

	console.log("Welcome!");

	if (Modernizr) {
		console.log("Modernizr OK!");
	}

	else {
		console.log("Couldn't load Modernizr");
	}

});