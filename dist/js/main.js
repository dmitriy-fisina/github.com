AOS.init({
    duration: 600,
});
$(document).ready(function () {
    if($(window).scrollTop() > 0) {
        $(".header").addClass("header-scroll");
    }
    $(".non-link").on("click", function(e){
        e.preventDefault();
    })
    $(".sub-menu").on("click", function (e) {
        if(!$(".sub-menu-inner").is(e.target) && $(".sub-menu-inner").has(e.target).length === 0) {
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
    $(window).on("scroll", function(){
        if($(this).scrollTop() > 0) {
            $(".header").addClass("header-scroll");
        }
        if($(this).scrollTop() == 0) {
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
        dots: true
    });
    $(".reviews-slider").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev"><svg version="1.1" id="Forma_1_копия_12_1_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"x="0px" y="0px" viewBox="0 0 23.4 16" style="enable-background:new 0 0 23.4 16;" xml:space="preserve"><style type="text/css">.st0{fill-rule:evenodd;clip-rule:evenodd;}</style><g id="Forma_1_копия_12"><g><path class="st0" d="M23.1,7.4l-7.4-7.2c-0.3-0.3-0.8-0.3-1.2,0c-0.3,0.3-0.3,0.8,0,1.1l6,5.8H0.8C0.4,7.2,0,7.6,0,8c0,0.4,0.4,0.8,0.8,0.8h19.7l-6,5.8c-0.3,0.3-0.3,0.8,0,1.1c0.3,0.3,0.8,0.3,1.2,0l7.4-7.2C23.4,8.3,23.4,7.8,23.1,7.4z"/></g></g></svg></button>',
        nextArrow: '<button type="button" class="slick-next"><svg version="1.1" id="Forma_1_копия_12_1_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"x="0px" y="0px" viewBox="0 0 23.4 16" style="enable-background:new 0 0 23.4 16;" xml:space="preserve"><style type="text/css">.st0{fill-rule:evenodd;clip-rule:evenodd;}</style><g id="Forma_1_копия_12"><g><path class="st0" d="M23.1,7.4l-7.4-7.2c-0.3-0.3-0.8-0.3-1.2,0c-0.3,0.3-0.3,0.8,0,1.1l6,5.8H0.8C0.4,7.2,0,7.6,0,8c0,0.4,0.4,0.8,0.8,0.8h19.7l-6,5.8c-0.3,0.3-0.3,0.8,0,1.1c0.3,0.3,0.8,0.3,1.2,0l7.4-7.2C23.4,8.3,23.4,7.8,23.1,7.4z"/></g></g></svg></button>',
        cssEase: 'linear',
        speed: 500
    });
});

