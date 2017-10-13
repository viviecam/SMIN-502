$(document).ready(function() {
	$( "img" ).hover(function() {
  		console.log("hover");
	});
	$( "img" ).hover(function() {
		var myAlt = $(this).attr("alt");
  		console.log(myAlt);
	});
});