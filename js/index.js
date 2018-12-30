$(document).ready(function(){

	$('.b-1-slider').slick({
		dots: true,
		fade: true,
		autoplay: true
	});

	$('.b-1-slider').on('afterChange',function(event, slick, currentSlide){
		$('.pos .number').text(currentSlide + 1);
	});

	$('.pos .all').text($('.b-1-slider').slick('getSlick').slideCount);

	$('.b-3 .filter li').click(function(){
		var el = $(this).data('f');
		$('.b-3 .filter li').removeClass('active');
		$(this).addClass('active');
		/*$('.b-3-slider').removeClass('active');
		setTimeout(function(){
			$('.b-3-slider').css('display','none');
			$(el).css('display','block');
			$(el).addClass('active');
			$('.b-3-slider').slick('reinit');
		},300);*/
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