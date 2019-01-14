$(document).ready(function(){

	if (location.hash){
		$('body,html').animate({scrollTop:0},1);
		setTimeout(function(){
			var des = $(location.hash).offset().top - 30;
			$('body,html').animate({scrollTop: des}, 800);
		},500);
	}

	$('.b-1-btn').click(function(){
		var el = $(this).attr('href');
		var des = $(el).offset().top - 30;
		$('body,html').animate({scrollTop: des}, 800);
		return false;
	});

});