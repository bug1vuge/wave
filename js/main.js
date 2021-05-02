$(function (){


    $(".menu a").on("click", function (e) {
		e.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1800);
	});

    $('.slider__items').slick({
        arrows: false,
        dots: true,
    });


    
    var mixer = mixitup('.gallery__items');

    $('.menu__btn, .menu a').on('click', function (){
        $('.menu__list').toggleClass('menu__list-active');
    });
})