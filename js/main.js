$(document).ready(function() {

/* Au survol d'une image */
	// $( "img" ).hover(function() {
	// 	console.log("hover");
	// 	var myAlt = $(this).attr("alt");
	// 	console.log(myAlt);
	// });


/* Afficher dans la console et dans le h2 le “Name” retourné.*/
	// var swapi1 = "https://swapi.co/api/people/1/?format=json";
	// $.getJSON(swapi1, function(json) {
	// 	console.log(json.name);
	// 	$('h2#name').html(json.name);
	// });


/* Afficher la liste des personnages et générer leurs modales correspondantes */
	var swapi3 = "https://swapi.co/api/people/?format=json";
	$.getJSON(swapi3, function(json) {
		console.log(json.results);
		var i = 1;
		$.each(json.results, function(){
			$('#list-characters').append('<h6><a data-toggle="modal" data-target="#modal-charac-' + i + '">' + this.name + '</a></h6>');
			$('div#details-characters').append('<div id="modal-charac-' + i + '" class="modal"><div class="modal-dialog" role="document"><div class="modal-content"><div class="modal-header"><h5 class="modal-title">' + this.name + '</h5><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button></div><div class="modal-body"><ul> </ul></div><div class="modal-footer"><button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button></div></div></div></div>')
			for(var key in this) {
			    $(".modal-body ul").append("<li>" + key + ' : ' + this[key] + "</li>")
			}
			i = i+1;
		});
 	});


/* Faire en sorte d’afficher dans une modal le détails d’un personnage du clic sur celui ci. */
	// var swapi4 = "https://swapi.co/api/people/2/?format=json";
	// $.getJSON(swapi4, function(json) {
	// 	// console.log(json);
	// 	for(var key in json) {
	// 	    // console.log(key + ' : ' + json[key]);
	// 	    $(".modal-body ul").append("<li>" + key + ' : ' + json[key] + "</li>")
	// 	}
	// 	// $.each(json.results, function(){
	// 	// 	console.log(this);
	// 	// 	// $('ul').append("<li>" + this.name + "</li>");
	// 	// });
	// });


	// var swapi = "https://swapi.co/api/people/";
	// $.getJSON(swapi, function(json) {
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