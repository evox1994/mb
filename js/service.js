$(document).ready(function(){

	if (location.hash){
		$('body,html').animate({scrollTop:0},1);
		setTimeout(function(){
			var des = $(location.hash).offset().top - 104;
			$('body,html').animate({scrollTop: des}, 800);
		},500);
	}

	function Numbers(){
		var i = j = 0;
		$('.b-3-list li').each(function(){
			i++;
			$(this).find('.li-number span').text(i);
		});
		$('.b-4-list li').each(function(){
			j++;
			$(this).find('.li-number span').text(j);
		});
	}
	Numbers();

	$('.radio-list label').click(function(){
		if ( !$(this).hasClass('active') ) {
			$('.radio-list label').removeClass('active');
			$(this).addClass('active');
		}
	});

	$('.form-btn').click(function(){
		var el = $(this).attr('href');
		$('.form-wrap').removeClass('active');
		$(el).addClass('active');
		return false;
	});

	function Selects() {
		$('.select-wrap').each(function(){
			var text = $(this).find('select option:selected').text();
			$(this).find('select option').each(function(){
				$(this).parents('.select-wrap').find('.select-drop').append('<a href=".'+$(this).attr('class')+'">'+$(this).text()+'</a>');
			});
			//$(this).find('.select-area span').text(text);
		});
	}
	Selects();

	$('.select-area').click(function(){
		if ( $(this).hasClass('active') ) {
			$(this).removeClass('active');
			$(this).parent().find('.select-drop').removeClass('active');
		} else {
			$('.select-area').removeClass('active');
			$('.select-drop').removeClass('active');
			$(this).addClass('active');
			$(this).parent().find('.select-drop').addClass('active');
		}
	});
	$('body').on('click','.select-drop a',function(){
		var text = $(this).text();
		var opt = $(this).attr('href');

		$(this).parents('.select-wrap').find('.select-area span').text(text);
		$(this).parents('.select-wrap').find(opt).prop('selected','true').change();
		$(this).parents('.select-wrap').find('.select-drop').removeClass('active');
		$(this).parents('.select-wrap').find('.select-area').removeClass('active');
		return false;
	});
	$('body').on('click',function(e){
		var container = $('.select-wrap');
		if (container.has(e.target).length === 0) {
			$('.select-drop').removeClass('active');
			$('.select-area').removeClass('active');
		}
	});
	
	$('.b-3 .filter li').click(function(){
		$('.b-3 .filter li').removeClass('active');
		$(this).addClass('active');
	});

});