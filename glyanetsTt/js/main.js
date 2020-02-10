$(document).ready(function () {
    $(".mobile-menu").hide();
    $(".phone").on("click", () => {
        $(".sub-menu").toggleClass("hide");
    });
    $(document).mouseup((event) => {
        let div = $(".phone");
        if (!div.is(event.target) &&
            div.has(event.target).length === 0 && !$(".sub-menu").is(event.target)) {
            $(".sub-menu").addClass("hide");
        }
    });
    $(".sub-menu > div").on("click", (event) => {
        $(".phone").text($(event.target).text());
    });
    $(".search").on("click", (event) => {
        if (!$(".entry-field").is(event.target)) {
            $(".entry-field").toggle("slide", { direction: "up" }, 300);
        }
    });
    $(document).mouseup((event) => {
        let div = $(".search");
        if (!div.is(event.target) &&
            div.has(event.target).length === 0 && !$(".entry-field").is(event.target)) {
            $(".entry-field").hide("slide", { direction: "up" }, 300)
        }
    });
    $(".show-news").on("click", (event) => {
        $(".news__block").removeClass("hide");
        $(".show-news").hide();
    });
    $(".burger").on("click", () => {
        $(".burger").toggleClass("burger-clicked");
        $(".mobile-menu").show().toggleClass("mobile-menu-hide")
    });
    let windowHeight = $(window).height();
    $(document).on('scroll', function () {
        let productBlock = $(".products__block");
        let newsBlock = $(".news__block");
        heightProduct = productBlock.offset().top + productBlock.height();
        heightNews = newsBlock.offset().top + newsBlock.height();
        if ($(document).scrollTop() + windowHeight >= heightProduct && $(window).width() >= 970) {
            $(productBlock).css('opacity', '1');
            $(productBlock).eq(0).addClass("slide-left");
            $(productBlock).eq(1).addClass("slide-up");
            $(productBlock).eq(2).addClass("slide-right");
        }
        if ($(document).scrollTop() + windowHeight >= heightNews && $(window).width() >= 970) {
            $(newsBlock).css('opacity', '1');
            $(newsBlock).slice(0, 3).addClass("slide-left");
        }
    });
})