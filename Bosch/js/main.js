$(function () {
    $(".banner-slick").slick({
        slidesToScroll: 1,
        slidesToShow: 1,
        dots: true,
        prevArrow: '<button class="slick-arrow slick-prev"><img src="./img/slickArrowLeft.svg" alt="Icon"></button>',
        nextArrow: '<button class="slick-arrow slick-next"><img src="./img/slickArrowLeft.svg" alt="Icon"></button>',
    }),
    $(".product-cards-full-width").slick({
        slidesToScroll: 1,
        slidesToShow: 5,    
        variableWidth: true,
        prevArrow: '<button class="slick-arrow slick-prev"><img src="./img/slickArrowLeft.svg" alt="Icon"></button>',
        nextArrow: '<button class="slick-arrow slick-next"><img src="./img/slickArrowLeft.svg" alt="Icon"></button>',
    });
    $(".product-cards-banner-slick").slick({
        slidesToScroll: 1,
        slidesToShow: 3,    
        variableWidth: true,
        nextArrow: '<button class="slick-arrow slick-next"><img src="./img/slickArrowLeft.svg" alt="Icon"></button>',
    });
});