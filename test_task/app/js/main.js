function playPauseVideo(button, video) {
    button.on("click", function () {
        if (button.hasClass("play")) {
            video[0].play();
            setTimeout(() => {
                button.removeClass("play").addClass("pause")
            }, 10);
        }
        if (button.hasClass("pause")) {
            video[0].pause();
            button.removeClass("pause").addClass("play")
        }
    });
};
function videoEnd(button, video) {
    video.on("ended", function () {
        button.removeClass("pause").addClass("play");
        if (button.is(":hidden")) {
            button.fadeIn();
        }
    });
};
$(document).ready(function () {
    $('#fullpage').fullpage({
        //options here
        autoScrolling: true,
        scrollHorizontally: false,
        navigation: true,
        responsiveWidth: '1161',
     });
    let player1 = $('#videoElement1'),
        btnPlayPause1 = $('#btnPlayPause1'),
        player2 = $("#videoElement2"),
        btnPlayPause2 = $("#btnPlayPause2"),
        player3 = $("#videoElement3"),
        btnPlayPause3 = $("#btnPlayPause3");

    playPauseVideo(btnPlayPause1, player1);
    videoEnd(btnPlayPause1, player1);
    playPauseVideo(btnPlayPause2, player2);
    videoEnd(btnPlayPause2, player2);
    playPauseVideo(btnPlayPause3, player3);
    videoEnd(btnPlayPause3, player3);
    $(".section-two__video").on("mouseleave", function (event) {
        let duration = player2[0].duration;
        if (player2[0].currentTime > 0 && player2[0].currentTime < duration) {
            btnPlayPause2.fadeOut(100);
        }
    });
    $(".section-two__video").on("mouseover", function (event) {
        let duration = player2[0].duration;
        if (player2[0].currentTime > 0 && player2[0].currentTime < duration) {
            btnPlayPause2.fadeIn(100);
        }
    });
    $(".section-two__content__color_select-block__wrapper_color").on("click", function (event) {
        let image = $(".section-two__content__color_select-block____image");
        if ($(event.target).hasClass("color-yellow") && image.not(".image-yellow")) {
            $("div[class*='image-']").removeClass(function (index, css) {
                return (css.match(/(^|\s)image-\S+/g) || []).join(' ');
            });
            image.addClass("image-yellow");
        }
        else if ($(event.target).hasClass("color-turquoise") && image.not(".image-turquoise")) {
            $("div[class*='image-']").removeClass(function (index, css) {
                return (css.match(/(^|\s)image-\S+/g) || []).join(' ');
            });
            image.addClass("image-turquoise");
        }
        else if ($(event.target).hasClass("color-red") && image.not(".image-red")) {
            $("div[class*='image-']").removeClass(function (index, css) {
                return (css.match(/(^|\s)image-\S+/g) || []).join(' ');
            });
            image.addClass("image-red");
        }
        else if ($(event.target).hasClass("color-black") && image.not(".image-black")) {
            $("div[class*='image-']").removeClass(function (index, css) {
                return (css.match(/(^|\s)image-\S+/g) || []).join(' ');
            });
            image.addClass("image-black");
        }
    });
    $($("#advantages")).on("click", function(event) {
        event.preventDefault();
        fullpage_api.moveTo(2);
    })
    $($("#specifications")).on("click", function(event) {
        event.preventDefault();
        fullpage_api.moveTo(3);
    })
    $($("#forWhom")).on("click", function(event) {
        event.preventDefault();
        fullpage_api.moveTo(4);
    })
});