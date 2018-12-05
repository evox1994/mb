$(document).ready(function(){

	$('.b-1-slider').slick({
		dots: true
	});

	$('.b-3 .filter li').click(function(){
		$('.b-3 .filter li').removeClass('active');
		$(this).addClass('active');
	});

	$('.b-3-slider').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1280,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 1000,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});

	$('.qwestion').click(function(){
		if ( $(this).parents('li').hasClass('active') ){
			$(this).parents('li').removeClass('active');
		} else {
			$(this).parents('li').addClass('active');
		}
	});

	$('.radio-list label').click(function(){
		if ( !$(this).hasClass('active') ) {
			$('.radio-list label').removeClass('active');
			$(this).addClass('active');
		}
	});

});