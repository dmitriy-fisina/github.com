function onCangeRange() {
    $('span.price').text(Math.round($('#range').val() * 130.434783) + ' грн');
}
$(document).ready(function () {
    $(".burger").click(function () {
        $(".menu-mobile").slideToggle();
        $(".screen-dimming").toggle();
    });
    $(document).mouseup(function (e) { 
        var div = $(".menu-mobile"); 
        if (!div.is(e.target) &&
            div.has(e.target).length === 0 && !$(".burger").is(e.target)) {
            div.slideUp();
            $(".screen-dimming").hide();
        }
    });
    $(document).ready(function () {
        $(".hero-slider").on("click", "a", function (event) {
            event.preventDefault();
            var id = $(this).attr('href'),
                top = $(id).offset().top;
            $('body,html').animate({
                scrollTop: top
            }, 1000);
        });
    });

    $('.owl-carousel').owlCarousel({
        nav: false,
        items: 1,
        dots: true,
        smartSpeed: 500,
        responsive:{
            1024:{
                dots: false,
                nav: true,
                loop: true
            }
        }
    });
    $("#range").ionRangeSlider({
        keyboard: true,
        min: 0,
        max: 10,
        from: 2.3,
        step: 0.1,
        postfix: "&nbspмин",
        hide_min_max: true
    });
    var selectCategory = $(".select-click");
    $("#select").click(function () {
        selectCategory.toggle();
    });
    $(document).mouseup(function (e) {
        if (!selectCategory.is(e.target) &&
            selectCategory.has(e.target).length === 0 && !$("#select").is(e.target)) {
            selectCategory.hide();
        }
    });
    $(".select-item > li").click(function () {
        $("#select").text($(this).text());
        selectCategory.hide();
    });
    $("button.clip").click(function () {
        $("button.active").removeClass("active");
        $(this).addClass("active");
        $(".clip-items").removeClass("display-none");
        $(".music-items").addClass("display-none");
        $(".music-items").removeClass("visible-1");
        setTimeout(() => {
            $(".clip-items").addClass("visible-1");
        }, 1);
    });
    $("button.music").click(function () {
        $("button.active").removeClass("active");
        $(this).addClass("active");
        $(".music-items").removeClass("display-none");
        $(".clip-items").addClass("display-none");
        $(".clip-items").removeClass("visible-1");
        setTimeout(() => {
            $(".music-items").addClass("visible-1");
        }, 1);
    });
    var submenu = $(".submenu");
    $(".select-menu").click(function () {
        submenu.toggle();
    });
    $(document).mouseup(function (e) {
        if (!submenu.is(e.target) && submenu.has(e.target).length === 0 && !$(".select-link").is(e.target)) {
            submenu.hide();
        }
    });
});