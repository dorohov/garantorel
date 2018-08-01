'use strict';
$(function() { 
	var CMS__TPL_PATH = '/wp-content/themes/azbn7theme';  
	//var CMS__TPL_PATH = '/garantorel';  
	//var CMS__TPL_PATH = '';  
	var reviews = $('[data-slider-slick="slick-reviews"]');	
	var reviews_two = $('[data-slider-slick="slick-reviews-two"]');	
	var gallery = $('[data-slider-slick="slick-gallery"]');	
	//local
	var prevArrow = '<button type="button" class="btn-nav__link  is--prev  slick-prev"><div class="btn-nav__name  is--prev">Назад</div><div class="btn-nav__icon  is--prev"><svg class="icon-svg icon-pagin-prev" role="img"><use xlink:href="'+ CMS__TPL_PATH +'/img/svg/sprite.svg#pagin-prev"></use></svg></div></button>';
	var nextArrow = '<button type="button" class="btn-nav__link  is--next  slick-next"><div class="btn-nav__name  is--next">Далее</div><div class="btn-nav__icon  is--next"><svg class="icon-svg icon-pagin-next" role="img"><use xlink:href="'+ CMS__TPL_PATH +'/img/svg/sprite.svg#pagin-next"></use></svg></div></button>';	
	
	reviews.slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		arrows: true,
		dots: false,
		prevArrow: prevArrow,
		nextArrow: nextArrow,
		responsive: [
		    {
				breakpoint: 768,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
				}
		    },
		    {
				breakpoint: 565,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
		    }
		]
	});
	reviews_two.on('init', function(event, slick, direction){
		$('.slick-cloned .card-item__preview').removeAttr('data-fancybox');
	});
	reviews_two.slick({
		slidesToShow: 2,
		slidesToScroll: 2,
		infinite: true,
		arrows: true,
		dots: false,
		prevArrow: prevArrow,
		nextArrow: nextArrow,
		responsive: [
		    {
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				}
		    },
		    {
				breakpoint: 565,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
		    }
		]
	});
	gallery.slick({
		slidesToShow: 4,
		slidesToScroll: 4,
		arrows: true,
		dots: true,
		infinite: true,
		prevArrow: prevArrow,
		nextArrow: nextArrow,
		responsive: [
		    {
				breakpoint: 1600,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
				}
		    },
		    {
				breakpoint: 1400,
				settings: {
					//dots: false,
					slidesToShow: 2,
					slidesToScroll: 2,
				}
		    },
		    {
				breakpoint: 1025,
				settings: {					
					arrows: false,
					slidesToShow: 2,
					slidesToScroll: 2,
				}
		    },
		    {
				breakpoint: 768,
				settings: {
					arrows: false,
					//dots: false,
					slidesToShow: 1,
					slidesToScroll: 1,
				}
		    }
		]
	});
}); 