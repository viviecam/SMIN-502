$(document).ready(function() {
/* Swiper - Additional library */

	var swiperHome = new Swiper ('.swiper-container.swiper-home', {
    	direction: 'horizontal',
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},
    	navigation: {
    		nextEl: '.swiper-button-next',
    		prevEl: '.swiper-button-prev',
    	},
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		}
    });     

/* Au survol d'une image */
	// $( "img" ).hover(function() {
	// 	console.log("survol");
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
	var id = 1; //initialisation de l'id du personnage, 
				//qui sert à lier le nom dans la liste, à la modale correspondante
	var swapi = "https://swapi.co/api/people/?format=json&page=1" ;
				//initialisation de l'url
	getDonnees(swapi);

	//Requête vers l'API SWAPI
	function getDonnees(swapi) {
		// for (i=1; i<=9; i++) { //Ancienne version, lorsque l'on imposait un nombre de page
		$.getJSON(swapi, function(json) {
			// console.log(json.next);
			// console.log(json);
			$.each(json.results, function(){
				$('ol#list-characters').append('<li class="col-12 col-md-4"><a data-toggle="modal" data-target="#modal-charac-' + id + '">' + this.name + '</a></li>');
				$('div#details-characters').append('<div id="modal-charac-' + id + '" class="modal"><div class="modal-dialog" role="document"><div class="modal-content"><div class="modal-header"><h5 class="modal-title">' + this.name + '</h5><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button></div><div class="modal-body"><ul> </ul></div><div class="modal-footer"><button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button></div></div></div></div>')
				for(var key in this) {
					// console.log(this[key]);
				    $("#modal-charac-" + id + " .modal-body ul").append("<li>" + key + ' : ' + this[key] + "</li>")
				}
				id = id+1;	
			});
			//On ajoute l'url de la page suivante dans notre variable
			var swapi = json.next;
			console.log(swapi);

			//On cache le bouton une fois arrivé à la dernière page
			if (swapi == null) {
				$( "#plusbutton" ).hide();
			};

			//Au clic sur le bouton "Voir plus", on effectue une nouvelle requete avec la nouvelle url
			$( "#plusbutton" ).off().click(function() { //The .off() method removes event handlers that were attached by default
	 			getDonnees(swapi);
	 		});
	 	}); //Fin $.getJSON
	 }; //Fin function getDonnees(swapi)


});
	 	

	// };
	
	// var id = 1;
	// for (i=1; i<=9; i++) {
	// 	var swapi3 = "https://swapi.co/api/people/?format=json&page=" + i ;
	// 	$.getJSON(swapi3, function(json) {
	// 		console.log(json.next);
	// 		$.each(json.results, function(){
	// 			$('ol#list-characters').append('<li class="col-12 col-md-4"><a data-toggle="modal" data-target="#modal-charac-' + id + '">' + this.name + '</a></li>');
	// 			$('div#details-characters').append('<div id="modal-charac-' + id + '" class="modal"><div class="modal-dialog" role="document"><div class="modal-content"><div class="modal-header"><h5 class="modal-title">' + this.name + '</h5><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button></div><div class="modal-body"><ul> </ul></div><div class="modal-footer"><button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button></div></div></div></div>')
	// 			for(var key in this) {
	// 			    $("#modal-charac-" + id + " .modal-body ul").append("<li>" + key + ' : ' + this[key] + "</li>")
	// 			}
	// 			id = id+1;
	// 		});
	//  	});
	// };


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
