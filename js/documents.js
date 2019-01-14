$(document).ready(function(){

	function fixScroll(){
		if ( $(window).width() > 767 ) {
			var vg = $('.b-2-wrap').offset().top - 80;
			var ng = vg + $('.b-2-wrap').outerHeight() - $('.fix-window').outerHeight();
			var st = $(window).scrollTop();

			if ( st > vg ) {
				if ( st > ng ) {
					$('.fix-window').removeClass('scroll');
					$('.fix-window').addClass('bottom');
				} else {
					$('.fix-window').addClass('scroll');
					$('.fix-window').removeClass('bottom');
				}
			} else {
				$('.fix-window').removeClass('scroll');
				$('.fix-window').removeClass('bottom');
			}
		} else {
			$('.fix-window').removeClass('scroll');
			$('.fix-window').removeClass('bottom');
		}
	}
	fixScroll();

	$(window).scroll(function(){
		fixScroll();
	});

});