import $ from 'jquery';
//import Flickity from 'flickity';
import Swiper from 'swiper';
import template from './handlebars/templateHero.hbs';

export default class Api{
	constructor (){
		this.initEls();
		this.initEvents();
	}

	initEls(){
		this.$els = {
			nameTab: $('.js-name-search'),
		}
		this.slider = null;
	}

	initEvents(){
		this.getHero();
		this.onClick();
	}

	initSlider(){
		var elem = document.querySelector('.swiper-container');
		this.slider = new Swiper( elem, { 
			pagination: {
	      		el: '.swiper-pagination',
	   		 },
			// Navigation arrows
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
		});
	}

	onClick () {
	    $('.js-hero-search-button').click(() => {
	        let name = $('.js-hero-search').val();
	        console.log(name);
	        this.getHero(name);
	        
	    });	
	}

	getHero(name){

		const api ={
			endpoint: 'https://www.superheroapi.com/api.php/1914766752001644/search/' + name,
		};

		$.getJSON(api.endpoint)
		.then((response) => {
			console.log(response);
			$('#target').empty();
			for(let result of response.results){
				console.log(result);
				this.renderHero(result)
			}
			this.initSlider();
			
		})
		.catch( (e) => {
			console.log('error with the quote :', e);
		});
	}

	renderHero (tab){

 	var rendered = template(tab);
 	
 	//supprimer ce qu'il y a dans target
  	$('#target').append(rendered);


  	// name = tab.name;

	}


}