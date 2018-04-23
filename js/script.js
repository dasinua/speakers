(function($, undefined){
    $(function(){

        $('.slick-opening').slick({
            dots: false,
            arrows: true,
            slidesToShow: 1,
            infinite: true,
            fade: false,
            nextArrow: '<button class="da-next" aria-hidden="true"><img src="images/opening__left.png"></button>',
            prevArrow: '<button class="da-prev" aria-hidden="true"><img src="images/opening__right.png"></button>',
        });

        $('.slick-issues').slick({
            dots: false,
            arrows: true,
            slidesToShow: 3,
            infinite: true,
            fade: false,
            nextArrow: '<button class="da-next" aria-hidden="true"><img src="images/issues__left.png"></button>',
            prevArrow: '<button class="da-prev" aria-hidden="true"><img src="images/issues__right.png"></button>',
        });
		
    });
})(jQuery);
