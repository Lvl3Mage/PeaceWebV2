var $ = require( "jquery" );
//IBG  // Also include in SCSS
import ibg from './libs/ibg.js'
$(document).ready(function(){
	ibg();
})

//MODAL  // Also include in SCSS
// import './libs/modal.js';
// import {CloseModal, OpenModal} from './libs/modal.js';


$(document).ready(function(){
	$('.banner-slider').slick({
		arrows: true,
		dots: true,
		infinite: true,
		speed: 500,
		fade: true,
		cssEase: 'linear'
	});
	$('.def-slider-1').slick({
		arrows: true,
		infinite: true,
		speed: 500,
		// fade: true,
		// cssEase: 'cssEase'
	});
	$('.def-slider-2').slick({
		arrows: true,
		dots: true,
		infinite: true,
		speed: 500,
		adaptiveHeight: true,
		// fade: true,
		// cssEase: 'cssEase'
	});
	$('.def-slider-3').slick({
		arrows: true,
		infinite: true,
		speed: 500,
		adaptiveHeight: true,
		slidesToShow: 5,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 4,
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 500,
				settings: {
					slidesToShow: 1,
				}
			}
		],
	});
	$('.def-slider-4').slick({
		arrows: true,
		infinite: true,
		speed: 500,
		adaptiveHeight: true,
		slidesToShow: 4,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 500,
				settings: {
					slidesToShow: 1,
				}
			}
		],
	});
});


$(document).ready(function(){
	$('[data-simple-tab].active').each(function(){
		ActivateSimpleTab(this);
	});
})
$(document).on('click', "[data-simple-tab]", function(e) {
	ActivateSimpleTab(this);
});
function ActivateSimpleTab(simpleTab){
	$(simpleTab).parents('[data-simple-tabs]').find('[data-simple-tab]').removeClass('active');
	$(simpleTab).addClass('active');

	$($(simpleTab).data('hide-selector')).addClass('hidden');
	let showEl = $($(simpleTab).data('show-selector'));
	showEl.removeClass('hidden');

	let slickEl = showEl.find('.slick-slider');
	if(slickEl.length > 0){
		slickEl.slick('refresh');
	}
	
}
//Mob menu
$(document).on( "click", "[data-mob-menu-trigger]", function(){
	$("[data-mob-menu-trigger]").toggleClass("active");
	$(".mob-menu").toggleClass("active");
});

// generic dropdown
$(document).on( "click", "[data-dropdown-menu-trigger]", function(){
	let container = $(this).closest('[data-dropdown-menu-container]');
	let dropdowns = container.find('[data-dropdown]');
	let curDropdown = $(this).closest("[data-dropdown-wrapper]").find("[data-dropdown]");
	for(let dropdown of dropdowns){
		if(dropdown != curDropdown[0]){
			$(dropdown).animate({
				height: "0px",
			}, 600);	
		}
	}
	curDropdown.animate({
		height: curDropdown.children().css('height'),
	}, 600);
})

//Mob menu specialized dropdown
$(document).on( "click", ".mob-menu__menu>li>span", function(){
	let container = $(this).closest('.mob-menu__menu');
	let dropdowns = container.children('li');
	let curDropdown = $(this).closest(".mob-menu__menu>li");
	dropdowns.removeClass("active");
	curDropdown.addClass("active");
	for(let dropdown of dropdowns){
		if(dropdown != curDropdown[0]){
			let baseElem = $(dropdown).children("span, a");
			console.log(baseElem.css('height'))
			$(dropdown).animate({
				height: baseElem.css('height'),
			}, 600);	
		}
	}
	curDropdown.animate({
		height: $(this).outerHeight() + curDropdown.children("ul").outerHeight() + "px",
	}, 600);
})