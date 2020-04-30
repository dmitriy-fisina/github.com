$(document).ready(function () {
    $(".slick-examples").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
    });
    $('.magnific').magnificPopup({
        type: 'image',
        items: {
            src: './img/examplesImg2.png'
          },
          zoom: true
      });
      $(".slick-create-clone").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        swipe: false,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next create-clone-button-next">Далее</button>',
        infinite: false,
        responsive: [
            {
              breakpoint: 580,
              settings: {
                  adaptiveHeight: true
              }
            }
          ]
    });
});