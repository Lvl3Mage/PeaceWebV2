
var $ = require('jquery');
//IBG  // Also include in SCSS
import ibg from './libs/ibg.js'
$(document).ready(function(){
	ibg();
})

//MODAL  // Also include in SCSS
import './libs/modal.js';
import {CloseModal, OpenModal} from './libs/modal.js';


$(document).ready(function(){
	let sliders = $('.custom-slider');
	for(let slider of sliders){
		let conf = $(slider).data('slider-settings');
		if(typeof conf === 'string'){
			conf = JSON.parse(conf);
		}
		$(slider).slick(conf);
	}
	$('.banner-slider').slick({
		arrows: true,
		dots: true,
		infinite: true,
		speed: 500,
		fade: true,
		cssEase: 'linear'
	});
	$('.banner-slider-auto').slick({
		autoplay:true,
		autoplaySpeed:1500,
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
	$('.def-slider-1-dots').slick({
		arrows: true,
		infinite: true,
		speed: 500,
		dots: true,
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
		slidesToShow: 3,
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
	
	$('.def-slider-3-dots').slick({
		arrows: true,
		dots: true,
		infinite: true,
		speed: 500,
		adaptiveHeight: true,
		slidesToShow: 3,
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
	$('.def-slider-4-dots').slick({
		arrows: true,
		dots: true,
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

	$.datepicker.regional.ru = {
		closeText: "Закрыть",
		prevText: "Пред",
		nextText: "След",
		currentText: "Сегодня",
		monthNames: [ "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
		"Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь" ],
		monthNamesShort: [ "Янв", "Фев", "Мар", "Апр", "Май", "Июн",
		"Июл", "Авг", "Сен", "Окт", "Ноя", "Дек" ],
		dayNames: [ "воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота" ],
		dayNamesShort: [ "вск", "пнд", "втр", "срд", "чтв", "птн", "сбт" ],
		dayNamesMin: [ "Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб" ],
		weekHeader: "Нед",
		dateFormat: "dd.mm.yy",
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: "" };
	$.datepicker.setDefaults($.datepicker.regional.ru );
	// $.selectmenu.setDefaults($.datepicker.regional.ru );
	
	$( ".filter-datepicker__input" ).datepicker();
	$( ".filter-dropdown select" ).selectmenu();
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
	let top = Math.max($(".header").offset().top - $(window).scrollTop(),0) + $(".header").height();
	$(".mob-menu").toggleClass("active");
	$(".mob-menu__content").css("height", "calc(100vh - "+top + "px)");
	// console.log(top);
	$(".header__languages").toggleClass("active");

	$('body').toggleClass('lock');
});
// generic dropdown
$(document).on( "click", "[data-dropdown-menu-trigger]", function(){
	let container = $(this).closest('[data-dropdown-menu-container]');
	let dropdowns = container.find('[data-dropdown]');
	let curWrapper = $(this).closest("[data-dropdown-wrapper]");
	let curDropdown = curWrapper.find("[data-dropdown]");

	if(!container.is('[data-allow-multiple-open]')){
		for(let dropdown of dropdowns){
			if(dropdown != curDropdown[0]){
				$(dropdown).closest('[data-dropdown-wrapper]').removeClass('active');
				$(dropdown).animate({
					height: "0px",
				}, 400);
			}
		}

	}
	if(curWrapper.hasClass('active')){
		curWrapper.removeClass('active');
		curDropdown.animate({
			height: 0 +"px",
		}, 400);
	}
	else{
		curWrapper.addClass('active');
		curDropdown.animate({
			height: curDropdown.children().css('height'),
		}, 400);

	}
})

//Mob menu specialized dropdown
$(document).on( "click", ".mob-menu__menu>li>span", function(){
	let container = $(this).closest('.mob-menu__menu');
	let dropdowns = container.children('li');
	let curDropdown = $(this).closest(".mob-menu__menu>li");
	let curDropdownState = curDropdown.hasClass('active');
	dropdowns.removeClass("active");
	curDropdown.toggleClass("active", !curDropdownState);



	//dropdowns = container.children('li');
	for(let dropdown of dropdowns){
		if(!$(dropdown).hasClass("active")){
			let baseElem = $(dropdown).children("span, a");
			//console.log(baseElem.css('height'))
			$(dropdown).animate({
				height: baseElem.css('height'),
			}, 400);	
		}
	}
	if(curDropdown.hasClass("active")){
		curDropdown.animate({
			height: $(this).outerHeight() + curDropdown.children("ul").outerHeight() + "px",
		}, 400);
	}
})

//Class toggler
$(document).on( "click", "[data-class-toggler]", function(){
	//gather state
	let classToggle = $(this).closest("[data-class-toggle]");
	let target = $(classToggle.data("target-selector"));
	let classToToggle = classToggle.data('classname');

	let classTogglerTarget = $(this).data('class-toggler');


	//toggling class
	if(classTogglerTarget === ''){//if target state not set - toggles class
		target.toggleClass(classToToggle);
	}
	else{//if target state is set - switches class to desired state
		target.toggleClass(classToToggle, classTogglerTarget);
	}

	//updating state
	classToggle.attr('data-toggle-state', target.hasClass(classToToggle));
});


//Audio
$(document).ready(function(){
	$('.audio-player__track').attr("value",0).trigger("input");
})

$('.audio-player__track').on('input', function () {
	this.style.setProperty('--coverage', $(this).val() + "%");
	console.log("ASADS");
});