(function($){

	"use strict";

	$(function(){

		$('.beneficio').on('mouseenter', function(){
			disable( $(this), '.beneficio' );
			var slide = $(this).data('slide');
			//console.log('s'+slide);
			$('.slideshow-beneficios').cycle('goto', slide);
		});

		headerScroll();
		$(document).on( 'scroll', function(){
			headerScroll();
		});

	});

})(jQuery);

function disable(elemento, hermanos){
	$(hermanos).removeClass('abled').addClass('disabled');
	elemento.removeClass('disabled').addClass('abled');
}

function headerScroll(){
	var alturaHeader = $('header').height();
	var scrollTop = $(window).scrollTop();

	if ( scrollTop >= alturaHeader ){
		$('header').addClass('scroll');
	} else {
		$('header').removeClass('scroll');
	}
}