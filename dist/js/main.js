$(document).ready(function () {
    let buttonBlock = $(".button-block");
    setInterval(() => {
        if (buttonBlock.hasClass("start-button-animation")) {
            buttonBlock.removeClass("start-button-animation");
            setTimeout(() => {
                buttonBlock.addClass("start-button-animation");
            }, 2000);

        }
        else {
            buttonBlock.addClass("start-button-animation");
            setTimeout(() => {
                buttonBlock.removeClass("start-button-animation");
            }, 2000);
        }
    }, 30000);
    $(".nav-slider").slick({
        arrows: false,
        slidesToShow: 7,
        asNavFor: '.slider-items',
        focusOnSelect: true
    });
    $(".slider-items").slick({
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
        asNavFor: '.nav-slider',
        slidesToScroll: 1,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 17000

    });
    $(".reviews .right-side").slick({
        slidesToScroll: 1,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
    });
    $(".answer-block").on("click", function (event) {
        $(this).find(".content").slideToggle();
    });
    $('[href *= "#"]').on("click", function (e) {
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr("href")).offset().top
        }, 1000);
        e.preventDefault();
    });
    $(".scrollPrice").on("click", function () {
        $('html, body').stop().animate({
            scrollTop: $("#price").offset().top
        }, 1000)
    });
    $(".pop-up").on("click", function () {
        $(".blackout-photo").toggle();
        $(".pop-up-photo").fadeToggle(1000);
        $(document).mouseup((event) => {
            if ($(".pop-up-photo").has(event.target).length === 0 && !$(".pop-up-photo").children().is(event.target)) {
                $(".blackout-photo").hide();
                $(".pop-up-photo").fadeOut();
            }
        });
    });
    $(".pop-up-photo").find(".close").on("click", function () {
        $(".pop-up-photo").fadeOut();
        $(".blackout-photo").hide();
    });
    $(".pay").on("click", function () {
        $(".blackout-form").toggle();
        $(".pop-up-form").fadeToggle(1000);
        $(document).mouseup((event) => {
            if ($(".pop-up-form").has(event.target).length === 0 && !$(".pop-up-form").children().is(event.target)) {
                $(".blackout-form").hide();
                $(".pop-up-form").fadeOut();
            }
        });
    });
})