let countSlide = $(".current-count");
let iterator = 1;

let dicrimentCount = function () {

    if (iterator >= 1) {
        countSlide.text(--iterator);
    }
    if (iterator < 1) {
        iterator = 4;
        countSlide.text(iterator);
    }
}
let incrimentCount = function () {

    if (iterator <= 4) {
        countSlide.text(++iterator);
    }
    if (iterator > 4) {
        iterator = 1;
        countSlide.text(iterator);
    }
}

$(document).ready(function () {
    function slickifyAdvantages2(){
        $(".advantages2-slider").slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            prevArrow: '<button type="button" class="slick-prev nav-event"></button>',
            nextArrow: '<button type="button" class="slick-next nav-event"></button>',
            mobileFirst: true,
            responsive: [
                {
                    breakpoint: 580,
                    settings: "unslick"
                }
            ]
        });
    };
    function slickifyWaysOfPaymentSlider(){
        $(".ways-of-payment-slider").slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            prevArrow: '<button type="button" class="slick-prev nav-event"></button>',
            nextArrow: '<button type="button" class="slick-next nav-event"></button>',
            mobileFirst: true,
            responsive: [
                {
                    breakpoint: 960,
                    settings: "unslick"
                }
            ]
        });
    };
    function slickifydoors2Slider(){
        $(".doors2-slider").slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            prevArrow: '<button type="button" class="slick-prev nav-event"></button>',
            nextArrow: '<button type="button" class="slick-next nav-event"></button>',
            mobileFirst: true,
            responsive: [
                {
                    breakpoint: 961,
                    settings: "unslick"
                },
                {
                    breakpoint: 581,
                    settings: {
                        slidesToShow: 2
                    }
                }
            ]
        });
    };
    slickifydoors2Slider();
    slickifyWaysOfPaymentSlider();
    slickifyAdvantages2();
    $(window).on("resize", function(){
        let windowWidth = $(this);
        if(windowWidth.width() < 580) {
            slickifyAdvantages2();
        }
        if(windowWidth.width() < 960) {
            slickifyWaysOfPaymentSlider();
            slickifydoors2Slider();
        }
    });
    $(".slider-block").slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows: true,
        infinite: true,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
        responsive: [
            {
              breakpoint: 1180,
              settings: {
                slidesToShow: 4
              }
            },
            {
                breakpoint: 960,
                settings: {
                  slidesToShow: 3
                }
            },
            {
                breakpoint: 670,
                settings: {
                  slidesToShow: 2
                }
            },
            {
                breakpoint: 520,
                settings: {
                  slidesToShow: 1,
                }
            }
        ]
    });
    $(".non-standard-slider").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        infinite: true,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
        responsive: [
            {
              breakpoint: 961,
              settings: {
                slidesToShow: 1
              }
            }
        ]
    });
    $(".accessories-slider").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        infinite: true,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
        responsive: [
            {
              breakpoint: 961,
              settings: {
                slidesToShow: 1
              }
            }
        ]
    });
    $(".our-works-slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        infinite: true,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
        responsive: [
            {
              breakpoint: 1280,
              settings: {
              }
            }
        ]
    });
    $(".our-works-slider-mobile").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
        dots: true
    });
    $(".reviews-nav-slider").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        infinite: true,
        prevArrow: '<button type="button" class="slick-prev nav-event"></button>',
        nextArrow: '<button type="button" class="slick-next nav-event"></button>',
        asNavFor: ".reviews-slider",
        centerMode: true,
        centerPadding: '17px',
        variableWidth: true,
        responsive: [
            {
              breakpoint: 581,
              settings: {
                slidesToShow: 1,
                variableWidth: false
              }
            }
        ]
    });
    $(".reviews-slider").slick({
        slidesToShow: 1,
        arrows: false,
        infinite: true,
        asNavFor: ".reviews-nav-slider",
        useTransform: false,
        variableWidth: false,
        swipe: false
    });

    $(".nav-event").on("click", function (event) {
        if (event.target.classList.contains("slick-prev"))
            dicrimentCount();

        if (event.target.classList.contains("slick-next"))
            incrimentCount();

    });
    $('.reviews-nav-slider').on('swipe', function (event, slick, direction) {
        if (direction == "left")
            incrimentCount();
        if (direction == "right")
            dicrimentCount();

    });
    $(".burger").on("click", function () {
        let mobileMenu = $(".mobile-menu");
        $(this).toggleClass("burger-click");
        if (mobileMenu.hasClass("mobile-menu-click")) {
            mobileMenu.removeClass("mobile-menu-click");
            setTimeout(function () {
                mobileMenu.hide();
            }, 300);
        }
        else {
            mobileMenu.show(10);
            mobileMenu.addClass("mobile-menu-click");

        }
    });
    $(".exterior-finish-slider").slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
        responsive: [
            {
              breakpoint: 1281,
              settings: {
                dots: true
              }
            },
            {
              breakpoint: 961,
              settings: {
                slidesToShow: 2,
                dots: true
              }
            },
            {
              breakpoint: 581,
              settings: {
                slidesToShow: 1,
                dots: true
              }
            }
        ]
    });
    $(".double-glazed-slider-slick").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
    });
    var map;
    function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
            center: { lat: 37.578525, lng: 126.984139 },
            zoom: 17,
            disableDefaultUI: false
        }),
            marker = new google.maps.Marker({
                position: { lat: 37.578525, lng: 126.984139 },
                map: map,
                icon: './img/marker.png'
            });
    }
    initMap();
})