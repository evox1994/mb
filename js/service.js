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
		var name = $(this).data('name');
		var subname = $(this).data('subname');
		var text = $(this).data('text');
		var img = $(this).data('img');
		var last = $(this).data('last');
		if (last){
			$('.b-5-info').css('display','none');
		} else {
			$('.b-5-info img').attr('src',img);
			$('.b-5-info .name').text(name);
			$('.b-5-info .subname').text(subname);
			$('.b-5-info p').text(text);
		}
		if ( $(window).width() < 768 ){
			var des = $('.form-wrap.active').offset().top - 70;
			$('html,body').animate({scrollTop: des},500);
		}
		$('.form-wrap').removeClass('active');
		setTimeout(function(){
			$('.form-wrap').css('display','none');
			$(el).css('display','block');
			$(el).addClass('active');
		},300);
		return false;
	});

	$('.form-btn-2').click(function(){
		var el = $(this).attr('href');
		var name = $(this).data('name');
		var subname = $(this).data('subname');
		var text = $(this).data('text');
		var img = $(this).data('img');
		var last = $(this).data('last');
		if (last){
			$('.b-5-info').css('display','inline-block');
		}
		$('.b-5-info img').attr('src',img);
		$('.b-5-info .name').text(name);
		$('.b-5-info .subname').text(subname);
		$('.b-5-info p').text(text);
		if ( $(window).width() < 768 ){
			var des = $('.form-wrap.active').offset().top - 70;
			$('html,body').animate({scrollTop: des},500);
		}
		$('.form-wrap').removeClass('active');
		setTimeout(function(){
			$('.form-wrap').css('display','none');
			$(el).css('display','block');
			$(el).addClass('active');
		},300);
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