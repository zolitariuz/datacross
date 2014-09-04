(function($){

	"use strict";

	$(function(){

		$('.beneficio').on('mouseenter', function(){
			disable( $(this), '.beneficio' );
			var slide = $(this).data('slide');
			//console.log('s'+slide);
			$('.slideshow-beneficios').cycle('goto', slide);
				if (slide==0) {
			$('.slideshow-beneficios').css('margin-top', '0px');
				};
				if (slide==1) {
			$('.slideshow-beneficios').css('margin-top', '84px');
				};
				if (slide==2) {
			$('.slideshow-beneficios').css('margin-top', '168px');
				};
				if (slide==3) {
			$('.slideshow-beneficios').css('margin-top', '252px');
				};
				if (slide==4) {
			$('.slideshow-beneficios').css('margin-top', '336px');
				};
		});

		headerScroll();
		$(document).on( 'scroll', function(){
			headerScroll();
		});

		$(".video-ejemplos").fitVids();

		$('.forma-contacto').validate();

		//nuevo_slider
		if( $('.tp-banner').length > 0 ){
			$('.tp-banner').show().revolution({
				dottedOverlay:"none",
				delay:7000,
				startwidth:1170,
				startheight:500,
				hideThumbs:200,

				thumbWidth:100,
				thumbHeight:50,
				thumbAmount:5,

				navigationType:"none",
				navigationArrows:"none",
				navigationStyle:"none",

				touchenabled:"on",
				onHoverStop:"on",

				swipe_velocity: 0.7,
				swipe_min_touches: 1,
				swipe_max_touches: 1,
				drag_block_vertical: false,

				parallax:"mouse",
				parallaxBgFreeze:"on",
				parallaxLevels:[7,4,3,2,5,4,3,2,1,0],

				keyboardNavigation:"off",

				navigationHAlign:"center",
				navigationVAlign:"bottom",
				navigationHOffset:0,
				navigationVOffset:20,

				soloArrowLeftHalign:"left",
				soloArrowLeftValign:"center",
				soloArrowLeftHOffset:20,
				soloArrowLeftVOffset:0,

				soloArrowRightHalign:"right",
				soloArrowRightValign:"center",
				soloArrowRightHOffset:20,
				soloArrowRightVOffset:0,

				shadow:0,
				fullWidth:"on",
				fullScreen:"off",

				spinner:"spinner4",

				stopLoop:"off",
				stopAfterLoops:-1,
				stopAtSlide:-1,

				shuffle:"off",

				autoHeight:"off",
				forceFullWidth:"off",

				hideThumbsOnMobile:"off",
				hideNavDelayOnMobile:1500,
				hideBulletsOnMobile:"off",
				hideArrowsOnMobile:"off",
				hideThumbsUnderResolution:0,

				hideSliderAtLimit:0,
				hideCaptionAtLimit:0,
				hideAllCaptionAtLilmit:0,
				startWithSlide:0,
				fullScreenOffsetContainer: ".header"
			});
		}

	});



})(jQuery);

$(document).ready(function() {
    $(".tabs-menu a").click(function(event) {
        event.preventDefault();
        $(this).parent().addClass("current");
        $(this).parent().siblings().removeClass("current");
        var tab = $(this).attr("href");
        $(".tab-content").not(tab).css("display", "none");
        $(tab).fadeIn();
    });
});


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

