$(function () {

    const catalogSlickArrowLeft = '<button class="slick-arrow slick-prev"><img src="./img/slickArrowLeft.png" alt="Icon"></button>';
    const catalogSlickArrowRight = '<button class="slick-arrow slick-next"><img src="./img/slickArrowRight.png" alt="Icon"></button>';

    $('.parts_catalog').find('.parts_catalog__wrapper-content .parts_catalog__wrapper-content-slider').slick({
        slidesToShow: 5,
        rows: 3,
        infinite: false,
        prevArrow: catalogSlickArrowLeft,
        nextArrow: catalogSlickArrowRight,
        responsive: [
            {
                breakpoint: 1321,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 641,
                settings: {
                    slidesToShow: 2
                }
            },
        ]
    });

    $('.burger').on('click', e => {
        const mobileMenu = $('.mobile-menu');
        if (mobileMenu.css('display') == 'none') {
            $(e.currentTarget).addClass('burger-active');
            mobileMenu.show(1).addClass('mobile-menu-active');
        } else {
            $(e.currentTarget).removeClass('burger-active');
            mobileMenu.removeClass('mobile-menu-active');
            setTimeout(() => {
                mobileMenu.hide();
            }, 500);
        }
    });

    $(document).on('mouseup', e => {
        const elem = $('.mobile-menu');
        const burger = $('.burger');
        if (!elem.is(e.target) && elem.has(e.target).length === 0 && !burger.is(e.target) && burger.has(e.target).length === 0) {
            burger.removeClass('burger-active');
            elem.removeClass('mobile-menu-active');
        }
    });

    $('footer').find('.list-title').on('click', e => {
        $(e.currentTarget).toggleClass('mobile-footer-menu-active');
        $(e.currentTarget).parent().toggleClass('mobile-footer-menu');
    });
});