var $ = require( "jquery" );

$(document).on('click', '[data-modal-trigger]', function(event) {
	$("body").css("overflow", "hidden");

	var modalID = $(this).data('modal-id');
	var modal = $("#" + modalID + ".modal");
	modal.addClass("modal-active");

	var modalTitle = $(this).data('modal-title');
	if(typeof modalTitle !== 'undefined'){
		modal.find(".modal-title").html(modalTitle);
	}
	// let modalFieldPresets= $(this).data('field-presets');
	// if(modalFieldPresets){
	// 	for (let i = 0; i < modalFieldPresets.length; i++) {
	// 		modal.find(modalFieldPresets[i].childSelector).val(modalFieldPresets[i].value);
	// 	}
	// }
});
$(document).on('mousedown touchstart', '.modal-bg, .modal-cross', function(event) {
	$("body").css("overflow", "visible");
	var modal = $(this).closest(".modal");
	modal.removeClass("modal-active");

});
$(document).on('mousedown touchstart', '.modal-window', function(event) {
	event.stopPropagation();
});
export function OpenModal(modalSelector){
	$("body").css("overflow", "hidden");
	$(modalSelector).addClass("modal-active");
}
export function CloseModal(modalSelector){ // disables modal and frees body if no active modals remain
	var modal = $(modalSelector).closest(".modal");
	modal.removeClass("modal-active");
	if($('.modal-active').length == 0){
		$("body").css("overflow", "visible");	
	}
}


/*
HTML

<div class="def-modal modal modal-bg" id="contact-modal">
	<div class="def-modal__outer-container container">
		<div class="def-modal__inner-container def-modal__inner-container--75">
			<div class="def-modal__wrapper modal-window">
				<div class="def-modal__top m--t-15">
					<div class="def-modal__title text--400 text--blue text--L m--l-25 sm-m--l-0">
						<span class="modal-title">Modal Title</span>
					</div>
					<div class="def-modal__cross modal-cross">
						<div class="def-modal__cross-line def-modal__cross-line--1"></div>
						<div class="def-modal__cross-line def-modal__cross-line--2"></div>
					</div>
				</div>
				<div class="def-modal__content-wrapper def-modal-class-name modal-content-wrapper">
					Modal Content
				</div>
			</div>
		</div>  
	</div>
</div>
*/