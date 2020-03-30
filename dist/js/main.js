AOS.init({
    duration: 600,
});

$(document).ready(function () {
    if($(window).width() < 580) {
        $(".about-company").find(".block").removeAttr("data-aos")
    }
    if($(window).width() < 960) {
        $(".for-client").find(".block").attr("data-aos", "fade-up");
        $(".portfolio").find(".block").attr("data-aos", "fade-up");
        $(".reviews").find(".slide-block").removeAttr("data-aos");
    }

    if ($(window).scrollTop() > 0) {
        $(".header").addClass("header-scroll");
    }
    $(".non-link").on("click", function (e) {
        e.preventDefault();
    })
    $(".sub-menu").on("click", function (e) {
        if (!$(".sub-menu-inner").is(e.target) && $(".sub-menu-inner").has(e.target).length === 0) {
            $(".sub-menu-inner").fadeToggle(300);
        }
        $(document).mouseup(function (e) {
            var div = $(".sub-menu-inner");
            if (!div.is(e.target) && div.has(e.target).length === 0 && !$(".sub-menu").is(e.target) && $(".sub-menu").has(e.target).length === 0) {
                $(".sub-menu-inner").fadeOut(300);
            }
            if ($(".sub-menu__close").is(e.target) || $(".sub-menu__close span").is(e.target)) {
                $(".sub-menu-inner").fadeOut();
            }
        });
    });
    $(window).on("scroll", function () {
        if ($(this).scrollTop() > 0) {
            $(".header").addClass("header-scroll");
        }
        if ($(this).scrollTop() == 0) {
            $(".header").removeClass("header-scroll");
        }
    });
    $(".adventures-slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev"><svg version="1.1" id="Forma_1_копия_12_1_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"x="0px" y="0px" viewBox="0 0 23.4 16" style="enable-background:new 0 0 23.4 16;" xml:space="preserve"><style type="text/css">.st0{fill-rule:evenodd;clip-rule:evenodd;}</style><g id="Forma_1_копия_12"><g><path class="st0" d="M23.1,7.4l-7.4-7.2c-0.3-0.3-0.8-0.3-1.2,0c-0.3,0.3-0.3,0.8,0,1.1l6,5.8H0.8C0.4,7.2,0,7.6,0,8c0,0.4,0.4,0.8,0.8,0.8h19.7l-6,5.8c-0.3,0.3-0.3,0.8,0,1.1c0.3,0.3,0.8,0.3,1.2,0l7.4-7.2C23.4,8.3,23.4,7.8,23.1,7.4z"/></g></g></svg></button>',
        nextArrow: '<button type="button" class="slick-next"><svg version="1.1" id="Forma_1_копия_12_1_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"x="0px" y="0px" viewBox="0 0 23.4 16" style="enable-background:new 0 0 23.4 16;" xml:space="preserve"><style type="text/css">.st0{fill-rule:evenodd;clip-rule:evenodd;}</style><g id="Forma_1_копия_12"><g><path class="st0" d="M23.1,7.4l-7.4-7.2c-0.3-0.3-0.8-0.3-1.2,0c-0.3,0.3-0.3,0.8,0,1.1l6,5.8H0.8C0.4,7.2,0,7.6,0,8c0,0.4,0.4,0.8,0.8,0.8h19.7l-6,5.8c-0.3,0.3-0.3,0.8,0,1.1c0.3,0.3,0.8,0.3,1.2,0l7.4-7.2C23.4,8.3,23.4,7.8,23.1,7.4z"/></g></g></svg></button>',
        cssEase: 'linear',
        speed: 500,
        dots: true,
        responsive: [
            {
                breakpoint: 961,
                settings: {
                    dots: false
                }
            }
        ]
    });
    $(".reviews-slider").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev"><svg version="1.1" id="Forma_1_копия_12_1_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"x="0px" y="0px" viewBox="0 0 23.4 16" style="enable-background:new 0 0 23.4 16;" xml:space="preserve"><style type="text/css">.st0{fill-rule:evenodd;clip-rule:evenodd;}</style><g id="Forma_1_копия_12"><g><path class="st0" d="M23.1,7.4l-7.4-7.2c-0.3-0.3-0.8-0.3-1.2,0c-0.3,0.3-0.3,0.8,0,1.1l6,5.8H0.8C0.4,7.2,0,7.6,0,8c0,0.4,0.4,0.8,0.8,0.8h19.7l-6,5.8c-0.3,0.3-0.3,0.8,0,1.1c0.3,0.3,0.8,0.3,1.2,0l7.4-7.2C23.4,8.3,23.4,7.8,23.1,7.4z"/></g></g></svg></button>',
        nextArrow: '<button type="button" class="slick-next"><svg version="1.1" id="Forma_1_копия_12_1_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"x="0px" y="0px" viewBox="0 0 23.4 16" style="enable-background:new 0 0 23.4 16;" xml:space="preserve"><style type="text/css">.st0{fill-rule:evenodd;clip-rule:evenodd;}</style><g id="Forma_1_копия_12"><g><path class="st0" d="M23.1,7.4l-7.4-7.2c-0.3-0.3-0.8-0.3-1.2,0c-0.3,0.3-0.3,0.8,0,1.1l6,5.8H0.8C0.4,7.2,0,7.6,0,8c0,0.4,0.4,0.8,0.8,0.8h19.7l-6,5.8c-0.3,0.3-0.3,0.8,0,1.1c0.3,0.3,0.8,0.3,1.2,0l7.4-7.2C23.4,8.3,23.4,7.8,23.1,7.4z"/></g></g></svg></button>',
        cssEase: 'linear',
        speed: 500,
        responsive: [
            {
                breakpoint: 1281,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 961,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
    let mobileMenu = $(".mobile-menu");
    $(".burger").on("click", function () {
        if (mobileMenu.css("display") == 'none') {
            mobileMenu.show(10);
            mobileMenu.addClass("mobile-menu-show");
        }
        else {
            mobileMenu.removeClass("mobile-menu-show");
            setTimeout(function () {
                mobileMenu.hide();
            }, 300);
        }
    });
    $(".close-block").on("click", function () {
        mobileMenu.removeClass("mobile-menu-show");
        setTimeout(function () {
            mobileMenu.hide();
        }, 300);
    });
    function slickifyPortfolio(){
        $(".portfolio-slider").slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: '<button type="button" class="slick-prev"><svg version="1.1" id="Forma_1_копия_12_1_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"x="0px" y="0px" viewBox="0 0 23.4 16" style="enable-background:new 0 0 23.4 16;" xml:space="preserve"><style type="text/css">.st0{fill-rule:evenodd;clip-rule:evenodd;}</style><g id="Forma_1_копия_12"><g><path class="st0" d="M23.1,7.4l-7.4-7.2c-0.3-0.3-0.8-0.3-1.2,0c-0.3,0.3-0.3,0.8,0,1.1l6,5.8H0.8C0.4,7.2,0,7.6,0,8c0,0.4,0.4,0.8,0.8,0.8h19.7l-6,5.8c-0.3,0.3-0.3,0.8,0,1.1c0.3,0.3,0.8,0.3,1.2,0l7.4-7.2C23.4,8.3,23.4,7.8,23.1,7.4z"/></g></g></svg></button>',
            nextArrow: '<button type="button" class="slick-next"><svg version="1.1" id="Forma_1_копия_12_1_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"x="0px" y="0px" viewBox="0 0 23.4 16" style="enable-background:new 0 0 23.4 16;" xml:space="preserve"><style type="text/css">.st0{fill-rule:evenodd;clip-rule:evenodd;}</style><g id="Forma_1_копия_12"><g><path class="st0" d="M23.1,7.4l-7.4-7.2c-0.3-0.3-0.8-0.3-1.2,0c-0.3,0.3-0.3,0.8,0,1.1l6,5.8H0.8C0.4,7.2,0,7.6,0,8c0,0.4,0.4,0.8,0.8,0.8h19.7l-6,5.8c-0.3,0.3-0.3,0.8,0,1.1c0.3,0.3,0.8,0.3,1.2,0l7.4-7.2C23.4,8.3,23.4,7.8,23.1,7.4z"/></g></g></svg></button>',
            cssEase: 'linear',
            speed: 500,
            mobileFirst: true,
            responsive: [
                {
                    breakpoint: 960,
                    settings: "unslick"
                }
            ]
        });
    };
    function slickify(){
        $(".about-company-slider").slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            rows: 2,
            prevArrow: '<button type="button" class="slick-prev"><svg version="1.1" id="Forma_1_копия_12_1_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"x="0px" y="0px" viewBox="0 0 23.4 16" style="enable-background:new 0 0 23.4 16;" xml:space="preserve"><style type="text/css">.st0{fill-rule:evenodd;clip-rule:evenodd;}</style><g id="Forma_1_копия_12"><g><path class="st0" d="M23.1,7.4l-7.4-7.2c-0.3-0.3-0.8-0.3-1.2,0c-0.3,0.3-0.3,0.8,0,1.1l6,5.8H0.8C0.4,7.2,0,7.6,0,8c0,0.4,0.4,0.8,0.8,0.8h19.7l-6,5.8c-0.3,0.3-0.3,0.8,0,1.1c0.3,0.3,0.8,0.3,1.2,0l7.4-7.2C23.4,8.3,23.4,7.8,23.1,7.4z"/></g></g></svg></button>',
            nextArrow: '<button type="button" class="slick-next"><svg version="1.1" id="Forma_1_копия_12_1_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"x="0px" y="0px" viewBox="0 0 23.4 16" style="enable-background:new 0 0 23.4 16;" xml:space="preserve"><style type="text/css">.st0{fill-rule:evenodd;clip-rule:evenodd;}</style><g id="Forma_1_копия_12"><g><path class="st0" d="M23.1,7.4l-7.4-7.2c-0.3-0.3-0.8-0.3-1.2,0c-0.3,0.3-0.3,0.8,0,1.1l6,5.8H0.8C0.4,7.2,0,7.6,0,8c0,0.4,0.4,0.8,0.8,0.8h19.7l-6,5.8c-0.3,0.3-0.3,0.8,0,1.1c0.3,0.3,0.8,0.3,1.2,0l7.4-7.2C23.4,8.3,23.4,7.8,23.1,7.4z"/></g></g></svg></button>',
            cssEase: 'linear',
            speed: 500,
            mobileFirst: true,
            responsive: [
                {
                    breakpoint: 580,
                    settings: "unslick"
                }
            ]
        });
    };
    slickify();
    slickifyPortfolio();
    $(window).on("resize", function(){
        let windowWidth = $(this);
        if(windowWidth.width() < 580) {
            slickify();
            $(".about-company").find(".block").removeAttr("data-aos");
        }
        if(windowWidth.width() < 960) {
            slickifyPortfolio();
            $(".portfolio").find(".block").attr("data-aos", "fade-up");
            $(".reviews").find(".slide-block").removeAttr("data-aos");
        }
    });
    $(".pop-up-button").on("click", function(){
        $(".pop-up-form").fadeToggle(300);
        $(".bg-black").fadeToggle(300);
    });
    $(".pop-up-close").on("click", function(){
        $(".pop-up-form").fadeToggle(300);
        $(".bg-black").fadeToggle(300);
    });
    $(".mobile-menu-button-pop-up").on("click", function(){
        mobileMenu.removeClass("mobile-menu-show");
        setTimeout(function () {
            mobileMenu.hide();
        }, 300);
    });
});

