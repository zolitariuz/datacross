(function($){

	"use strict";

	$(function(){

		$('.beneficio').on('click', function(){
			disable( $(this), '.beneficio' );
		});

	});

})(jQuery);

function disable(elemento, hermanos){
	$(hermanos).removeClass('abled').addClass('disabled');
	elemento.removeClass('disabled').addClass('abled');
}