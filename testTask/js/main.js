$(function () {

    $(".our-works").find(".select-view").children().on("click", function (e) {
        if (!$(e.currentTarget).hasClass("select-view__item-active")) {
            $(".our-works").find(".select-view").children().removeClass("select-view__item-active");
            $(e.currentTarget).addClass("select-view__item-active");
        }
    });
    var $carousel = $(".our-works").find(".slider-wrapper");
    $(".our-works").find(".slider-wrapper").slick({
        slidesToShow: 4,
        nextArrow: '<button class="slick-arrow slick-next"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 49 23" enable-background="new 0 0 49 23" xml:space="preserve"> <g> <g> <path fill-rule="evenodd" clip-rule="evenodd" fill="#FFFFFF" d="M48.8,11.1l-11-10.9c-0.2-0.2-0.6-0.2-0.8,0 c-0.2,0.2-0.2,0.6,0,0.8l10,10H0.8c-0.3,0-0.6,0.2-0.6,0.6v0c0,0.3,0.2,0.6,0.6,0.6h46.3l-10,10c-0.2,0.2-0.2,0.6,0,0.8 c0.2,0.2,0.6,0.2,0.8,0l11-10.9C49,11.7,49,11.3,48.8,11.1z"/> </g> </g> </svg></button>',
        prevArrow: '<button class="slick-arrow slick-prev"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 49 23" enable-background="new 0 0 49 23" xml:space="preserve"> <g> <g> <path fill-rule="evenodd" clip-rule="evenodd" fill="#FFFFFF" d="M48.8,11.1l-11-10.9c-0.2-0.2-0.6-0.2-0.8,0 c-0.2,0.2-0.2,0.6,0,0.8l10,10H0.8c-0.3,0-0.6,0.2-0.6,0.6v0c0,0.3,0.2,0.6,0.6,0.6h46.3l-10,10c-0.2,0.2-0.2,0.6,0,0.8 c0.2,0.2,0.6,0.2,0.8,0l11-10.9C49,11.7,49,11.3,48.8,11.1z"/> </g> </g> </svg></button>',
        responsive: [
            {
                breakpoint: 1249,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 961,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 759,
                settings: {
                    slidesToShow: 1,
                    variableWidth: true,
                    centerMode: true
                }
            }
        ]
    }).magnificPopup({
        type: 'image',
        delegate: '.slick-slide a',
        gallery: {
            enabled: true,
            tCounter: ''
        },
    });
    $(".our-worker").find(".name-worker-wrapper").slick({
        slidesToShow: 1,
        arrows: false,
        fade: true,
        swipe: false
    });
    $(".our-worker").find(".slider-wrapper").slick({
        slidesToShow: 2,
        variableWidth: true,
        asNavFor: '.name-worker-wrapper',
        nextArrow: '<button class="slick-arrow slick-next"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 49 23" enable-background="new 0 0 49 23" xml:space="preserve"> <g> <g> <path fill-rule="evenodd" clip-rule="evenodd" fill="#FFFFFF" d="M48.8,11.1l-11-10.9c-0.2-0.2-0.6-0.2-0.8,0 c-0.2,0.2-0.2,0.6,0,0.8l10,10H0.8c-0.3,0-0.6,0.2-0.6,0.6v0c0,0.3,0.2,0.6,0.6,0.6h46.3l-10,10c-0.2,0.2-0.2,0.6,0,0.8 c0.2,0.2,0.6,0.2,0.8,0l11-10.9C49,11.7,49,11.3,48.8,11.1z"/> </g> </g> </svg></button>',
        prevArrow: '<button class="slick-arrow slick-prev"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 49 23" enable-background="new 0 0 49 23" xml:space="preserve"> <g> <g> <path fill-rule="evenodd" clip-rule="evenodd" fill="#FFFFFF" d="M48.8,11.1l-11-10.9c-0.2-0.2-0.6-0.2-0.8,0 c-0.2,0.2-0.2,0.6,0,0.8l10,10H0.8c-0.3,0-0.6,0.2-0.6,0.6v0c0,0.3,0.2,0.6,0.6,0.6h46.3l-10,10c-0.2,0.2-0.2,0.6,0,0.8 c0.2,0.2,0.6,0.2,0.8,0l11-10.9C49,11.7,49,11.3,48.8,11.1z"/> </g> </g> </svg></button>',
    });
    $(".our-worker").find(".slider-wrapper").on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        let slidesLength = slick.$slides.length - 1,
            isCurrentFirstOrLast = currentSlide === 0 || currentSlide === slidesLength,
            isNextFirstOrLast = nextSlide === 0 || nextSlide === slidesLength;

        if (isCurrentFirstOrLast && isNextFirstOrLast) {
            let nextClone = $(event.currentTarget).find('.slick-cloned.slick-active');
            setTimeout(function () {
                nextClone.addClass('slick-current');
            }, 1)
        }
    });
    $(".contacts").find(".custom-select").on("click", function (e) {
        if (!$(this).hasClass("custom-select-active")) {
            $(this).css("border-radius", "22px 22px 0 0")
        }
        else {
            setTimeout(() => {
                $(this).css("border-radius", "22px")
            }, 200)
        }
        $(this).toggleClass("custom-select-active").find(".custom-option-menu").slideToggle(200);
        if ($(e.target).is("li")) {
            $(this).find(".current-option").text($(e.target).text());
        }
    });
    $(".burger").on("click", function () {
        if ($(".header-burger-menu").css("display") == "none") {
            $(".header-burger-menu").fadeIn(200);
            $("html, body").css("overflow-y", "hidden");
            $(this).addClass("burger-active");
        }
        else if ($(".header-burger-menu").css("display") == "block") {
            $(".header-burger-menu").fadeOut(200);
            $("html, body").css("overflow-y", "auto");
            $(this).removeClass("burger-active");
        }
    });
    $(".all-services").on("click", function () {
        $(".pop-up-our-services").fadeIn(200);
        $(".black-out-pop-up-our-services").fadeIn(200);
    });
    $(".close-pop-up-our-services").on("click", function () {
        $(".pop-up-our-services").fadeOut(200);
        $(".black-out-pop-up-our-services").fadeOut(200);
    });
    $(".header").find(".location").on("click", function () {
        $(".pop-up-select-city").fadeIn(200);
        $(".black-out-pop-up-select-city").fadeIn(200);
       
    });
    $(".close-pop-up-select-city").on("click", function () {
        $(".pop-up-select-city").fadeOut(200);
        $(".black-out-pop-up-select-city").fadeOut(200);
    });
    $(".pop-up-select-city").find(".select-wrapper").children().on("click", function () {
        $(".header").find(".location .title").text($(this).text());
        $(".pop-up-select-city").fadeOut(200);
        $(".black-out-pop-up-select-city").fadeOut(200);
    });
    if($(window).width() < 961) {
        let headerHeight = $(".header").height() - 1,
            headerPaddingTop = $(".header").css("padding-top").replace(/px/gi, "");
        $(".header-burger-menu").css("top", `${headerHeight + +headerPaddingTop}px`);
    }
    $(window).on("resize", function () {
        if($(window).width() < 961) {
            let headerHeight = $(".header").height() - 1,
                headerPaddingTop = $(".header").css("padding-top").replace(/px/gi, "");
            $(".header-burger-menu").css("top", `${headerHeight + +headerPaddingTop}px`);
        } 
    });
});