$(document).ready(function() {

/*Afficher au survol d’une image la chaîne ‘survol’ dans la console de votre navigateur*/
	// $( "img" ).hover(function() {
 //  		console.log("hover");
	// });

/*Afficher au survol d’une image le convenu de la balise ALT de l’image dans la console de votre navigateur*/	
	// $( "img" ).hover(function() {
	// 	var myAlt = $(this).attr("alt");
 //  		console.log(myAlt);
	// });

/*“Appeler” l’URL https://swapi.co/api/people/1/?format=json et afficher dans la console le “Name” retourné.*/
	var swapi = "https://swapi.co/api/people/1/?format=json";
	$.getJSON(swapi, function(json) {
        console.log(json.name);
    });

/* “Appeler” l’URL https://swapi.co/api/people/1/?format=json et afficher dans une balise <h2> le “Name”
retourné. */
    var swapi = "https://swapi.co/api/people/1/?format=json";
	$.getJSON(swapi, function(json) {
		$('h2').html(json.name);
    });



	// var swapi = "https://swapi.co/api/people/";
	// $.getJSON(swapi, function(json) {
 //        console.log(json);
 //    });

 // 	var swapi = "https://swapi.co/api/" + type + "/" + nb + "/";
	// $.getJSON(swapi, {type = people , nb = 87 }).done(function(json) {
 //        console.log(json);
 //    });


 //  	var swapi = "https://swapi.co/api/people/87";
	// $.getJSON(swapi, function(json) {
 //        $('#card-text').html('Name: ' + json.name +);
 //    });

 //   	var swapi = "https://swapi.co/api/people/";
	// $.getJSON(swapi, function(json) {
	// 	$('.card-text').html(json.count);
 //        console.log(json.count);
 //    });
});