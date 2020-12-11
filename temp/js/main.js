$(function(){

    const catalogSlickArrowLeft = '<button class="slick-arrow slick-prev"><img src="./img/slickArrowLeft.png" alt="Icon"></button>';
    const catalogSlickArrowRight = '<button class="slick-arrow slick-next"><img src="./img/slickArrowRight.png" alt="Icon"></button>';

    $('.parts_catalog').find('.parts_catalog__wrapper-content .parts_catalog__wrapper-content-slider').slick({
        slidesToShow: 5,
        rows: 3,
        infinite: false,
        prevArrow: catalogSlickArrowLeft,
        nextArrow: catalogSlickArrowRight
    })
  
});