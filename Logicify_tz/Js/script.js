$(document).ready(function () {
    $(".burger-menu-icon").click(function () {
        $(".menu-mobile").addClass("menu-show");
    });
    $(".icon-close").click(function () {
        $(".menu-mobile").removeClass("menu-show");
    });
});