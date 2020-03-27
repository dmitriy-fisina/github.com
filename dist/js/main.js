AOS.init({
    duration: 600,
});
$(document).ready(function () {
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
                    console.log("if")
            }
             if ($(".sub-menu__close").is(e.target) || $(".sub-menu__close span").is(e.target)) {
                 $(".sub-menu-inner").fadeOut();
             }
        });
    });
    $(window).on("scroll", function(){
        console.log($(this).scrollTop())
        if($(this).scrollTop() > 0) {
            $(".header").addClass("header-scroll");
        }
        if($(this).scrollTop() == 0) {
            $(".header").removeClass("header-scroll");
        }
    });
});

