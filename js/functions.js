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
			logoScroll();
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

function logoScroll(){
	var alturaHeader = $('header').height();
	var scrollTop = $(window).scrollTop();
	
	if ( scrollTop >= alturaHeader ){
		$('h1').css('width', '20%');
		$('h1').css('margin-right', '14%');
	} else if ( scrollTop < alturaHeader ){
		$('h1').css('width', '25%');
		$('h1').css('margin-right', '9%');
	} 
}