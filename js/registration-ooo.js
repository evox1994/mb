$(document).ready(function(){

	$(document).on('click','.scroll-btn',function(){
		var el = $(this).attr('href');
		var des = $(el).offset().top - 50;
		$('body,html').animate({scrollTop: des},800);
		return false;
	});

});