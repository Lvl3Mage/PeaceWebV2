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
