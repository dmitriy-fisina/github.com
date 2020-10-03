$(function () {

    $(".slider-nav__wrapper").slick({
        arrows: false,
        slidesToShow: 3,
        swipe: false,
        variableWidth: true,
        focusOnSelect: true,
        infinite: false,
        asNavFor: ".slider-main__wrapper"
    });
    let countSlides = $(".slider-nav-section").find(".slick-slide").length;
    $(".slick-arrows").on("click", function (e) {
        if($(e.currentTarget).hasClass("slick-prev")) {
            $(".slider-main__wrapper").slick('slickPrev');
            let indexSlide =  $(".slider-nav-section").find(".slick-current").attr("data-slick-index");
            if(indexSlide < 1) {
               $(".slick-prev").addClass("slick-arrow-disable");
               $(".slick-next").removeClass("slick-arrow-disable");
            }
            if(indexSlide > 0 && indexSlide < countSlides - 1) {
                $(".slick-prev").removeClass("slick-arrow-disable");
                $(".slick-next").removeClass("slick-arrow-disable");
            }
            $(".slider-main").find(".current-slide").text(+indexSlide + 1)
        }
        if($(e.currentTarget).hasClass("slick-next")) {
            $(".slider-main__wrapper").slick('slickNext');
            let indexSlide =  $(".slider-nav-section").find(".slick-current").attr("data-slick-index");
            if(indexSlide == countSlides - 1) {
                $(".slick-prev").removeClass("slick-arrow-disable");
                $(".slick-next").addClass("slick-arrow-disable");
            }
            if(indexSlide > 0 && indexSlide < countSlides - 1) {
                $(".slick-prev").removeClass("slick-arrow-disable");
                $(".slick-next").removeClass("slick-arrow-disable");
            }
            $(".slider-main").find(".current-slide").text(+indexSlide + 1)
        }
    });
    $(".slider-nav-section").find(".slick-slide").on("click", function () {
        let indexSlide =  $(".slider-nav-section").find(".slick-current").attr("data-slick-index");
        if(indexSlide < 1) {
            $(".slick-prev").addClass("slick-arrow-disable");
            $(".slick-next").removeClass("slick-arrow-disable");
        }
        else if(indexSlide == countSlides - 1) {
            $(".slick-prev").removeClass("slick-arrow-disable");
            $(".slick-next").addClass("slick-arrow-disable");
        }
        else {
            $(".slick-prev").removeClass("slick-arrow-disable");
            $(".slick-next").removeClass("slick-arrow-disable");
        }
    });
    $(".slider-main__wrapper").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: ".slider-nav__wrapper",
        infinite: false,
        responsive: [
            {
                breakpoint: 571,
                settings: {
                   //variableWidth: true,
                }
            }
        ]
    });
    $('.slider-main__wrapper').on('swipe', function(){
        let indexSlide =  $(".slider-nav-section").find(".slick-current").attr("data-slick-index");
        if(indexSlide < 1) {
            $(".slick-prev").addClass("slick-arrow-disable");
            $(".slick-next").removeClass("slick-arrow-disable");
        }
        else if(indexSlide == countSlides - 1) {
            $(".slick-prev").removeClass("slick-arrow-disable");
            $(".slick-next").addClass("slick-arrow-disable");
        }
        else {
            $(".slick-prev").removeClass("slick-arrow-disable");
            $(".slick-next").removeClass("slick-arrow-disable");
        }
        $(".slider-main").find(".current-slide").text(+indexSlide + 1);
    });
});