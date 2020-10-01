$(function () {

    $(".news-slick").slick({
        slidesToShow: 3,
        prevArrow: '<button class="slick-arrows slick-prev"><img src="./img/sliderArrowRight.svg" alt="Icon"></button>',
        nextArrow: '<button class="slick-arrows slick-next"><img src="./img/sliderArrowRight.svg" alt="Icon"></button>',
        dots: true,
        responsive: [
            {
                breakpoint: 841,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 481,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    $(".input-mask-phone").inputmask({ "mask": "+7 (999)-999-99-99" });

    $(".get-consultation, .header .order, .mobile-order").on("click", function (e) {
        $(".pop-up-call-back").fadeToggle(200);
        $(document).mouseup(function (e) {
            var div = $(".pop-up-call-back");
            if (!div.is(e.target) && div.has(e.target).length === 0 && !$(".get-consultation").is(e.target) && $(".get-consultation").has(e.target).length === 0 && !$(".header .order").is(e.target) && $(".header .order").has(e.target).length === 0 && !$(".mobile-order").is(e.target) && $(".mobile-order").has(e.target).length === 0) {
                $(".pop-up-call-back").fadeOut(200);
            }
        });
    });
    $(".close-pop-up-call-back").on("click", function () {
        $(".pop-up-call-back").fadeOut(200);
    });
    $(".menu-button").on("click", function (e) {

        if ($(this).find(".sub-menu").css("display") == "none") {
            $(this).find(".sub-menu").fadeIn(200);
            $(this).find(".burger-icon").addClass("burger-icon-active");
        }
        else if ($(this).find(".sub-menu").css("display") == "block" && !$(this).find(".sub-menu").is(e.target) && $(this).find(".sub-menu").has(e.target).length === 0) {
            $(this).find(".sub-menu").fadeOut(200);
            $(this).find(".burger-icon").removeClass("burger-icon-active");
        }

        $(document).mouseup(function (e) {
            var div = $(".menu-button");
            if (!div.is(e.target) && div.has(e.target).length === 0) {
                $(this).find(".sub-menu").fadeOut(200);
                $(this).find(".burger-icon").removeClass("burger-icon-active");
            }
        });
    });
    $(".mobile-menu-button").on("click", function (e) {
        if ($(this).find(".mobile-menu-button-sub-menu").css("display") == "none") {
            $(this).find(".mobile-menu-button-sub-menu").fadeIn(200);
            $(this).find(".burger-icon").addClass("burger-icon-active");
        }
        else if ($(this).find(".mobile-menu-button-sub-menu").css("display") == "block" && !$(this).find(".mobile-menu-button-sub-menu").is(e.target) && $(this).find(".mobile-menu-button-sub-menu").has(e.target).length === 0) {
            $(this).find(".mobile-menu-button-sub-menu").fadeOut(200);
            $(this).find(".burger-icon").removeClass("burger-icon-active");
        }
        $(document).mouseup(function (e) {
            var div = $(".mobile-menu-button");
            if (!div.is(e.target) && div.has(e.target).length === 0) {
                $(this).find(".mobile-menu-button-sub-menu").fadeOut(200);
                $(this).find(".burger-icon").removeClass("burger-icon-active");
            }
        });
    });
    if ($(window).width() < 481) {
        let containerWidth = $(".container").width() + 'px';
        $(".mobile-menu-button-sub-menu").css("width", containerWidth);
    }
    $(window).on("resize", function () {
        if ($(window).width() < 481) {
            let containerWidth = $(".container").width() + 'px';
            $(".mobile-menu-button-sub-menu").css("width", containerWidth);
        }
    });
    if ($(window).width() < 481) {
        let containerWidth = $(".container").width() + 'px';
        $(".pop-up-call-back").css("width", containerWidth);
    }
    $(window).on("resize", function () {
        if ($(window).width() < 481) {
            let containerWidth = $(".container").width() + 'px';
            $(".pop-up-call-back").css("width", containerWidth);
        }
    });
    $(".anchor").on("click", function (event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top }, 500);
    });
 
    let pageName = window.location.pathname;
    if(pageName.includes("index.html")) {
        if ($(window).scrollTop() > 200) {
            if ($(window).width() < 481) {
                $(".pop-up-call-back").css("top", "0px")
            }
            $(".header").addClass("header-place");
            $(".header").css("top", "-150px").animate({
                top: 0
            }, 400);
    
        }
        if ($(window).scrollTop() < 200 || $(window).scrollTop() === 0) {
            if ($(window).width() < 481) {
                $(".pop-up-call-back").css("top", "32px")
            }
            $(".header").removeClass("header-place").css("top", "70px");
            $(".header").stop(1);
    
        }
        $(window).on("scroll", function () {
            if ($(window).scrollTop() > 200 && !$(".header").hasClass("header-place")) {
                if ($(window).width() < 481) {
                    $(".pop-up-call-back").css("top", "0px")
                }
                $(".header").addClass("header-place");
                $(".header").css("top", "-150px").animate({
                    top: 0
                }, 400);
    
            }
            if ($(window).scrollTop() < 200 || $(window).scrollTop() === 0) {
                if ($(window).width() < 481) {
                    $(".pop-up-call-back").css("top", "32px")
                }
                $(".header").removeClass("header-place").css("top", "70px");
                $(".header").stop(1);
    
            }
        }); 
    }
});