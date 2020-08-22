$(document).ready(function () {
  AOS.init();
  $("#mask-tel,#mask-tel2").inputmask({ "mask": "+7 (999)-999-99-99" });

  $(".our-partners-slick").slick({
    slidesToShow: 4,
    prevArrow: '<div class="slick-prev"><svg width="19" height="33" viewBox="0 0 19 33" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.7441 1.18653L2.74414 16.1865L17.7441 31.1865" stroke="white" stroke-width="3"/></svg></div>',
    nextArrow: '<div class="slick-next"><svg width="19" height="33" viewBox="0 0 19 33" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.7441 1.18653L2.74414 16.1865L17.7441 31.1865" stroke="white" stroke-width="3"/></svg></div>',
    responsive: [
      {
        breakpoint: 1180,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      },
    ]
  });
  $(".about-us-slick").slick({
    slidesToShow: 3,
    prevArrow: '<div class="slick-prev"><svg width="19" height="33" viewBox="0 0 19 33" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.7441 1.58789L2.74414 16.5879L17.7441 31.5879" stroke="url(#paint0_linear)" stroke-width="3"/><defs><linearGradient id="paint0_linear" x1="3.17735" y1="16.5879" x2="17.7441" y2="16.5879" gradientUnits="userSpaceOnUse"><stop stop-color="#2933F2"/><stop offset="1" stop-color="#FA00FF"/></linearGradient></defs></svg></div>',
    nextArrow: '<div class="slick-next"><svg width="19" height="33" viewBox="0 0 19 33" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.7441 1.58789L2.74414 16.5879L17.7441 31.5879" stroke="url(#paint0_linear)" stroke-width="3"/><defs><linearGradient id="paint0_linear" x1="3.17735" y1="16.5879" x2="17.7441" y2="16.5879" gradientUnits="userSpaceOnUse"><stop stop-color="#2933F2"/><stop offset="1" stop-color="#FA00FF"/></linearGradient></defs></svg></div>',
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 620,
        settings: {
          slidesToShow: 1
        }
      },
    ]
  });
  $(".news-slick").slick({
    dots: true,
    slidesToShow: 3,
    variableWidth: true,
    prevArrow: '<div class="slick-prev"><svg width="19" height="33" viewBox="0 0 19 33" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.7441 1.58789L2.74414 16.5879L17.7441 31.5879" stroke="url(#paint0_linear)" stroke-width="3"/><defs><linearGradient id="paint0_linear" x1="3.17735" y1="16.5879" x2="17.7441" y2="16.5879" gradientUnits="userSpaceOnUse"><stop stop-color="#2933F2"/><stop offset="1" stop-color="#FA00FF"/></linearGradient></defs></svg></div>',
    nextArrow: '<div class="slick-next"><svg width="19" height="33" viewBox="0 0 19 33" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.7441 1.58789L2.74414 16.5879L17.7441 31.5879" stroke="url(#paint0_linear)" stroke-width="3"/><defs><linearGradient id="paint0_linear" x1="3.17735" y1="16.5879" x2="17.7441" y2="16.5879" gradientUnits="userSpaceOnUse"><stop stop-color="#2933F2"/><stop offset="1" stop-color="#FA00FF"/></linearGradient></defs></svg></div>',
    responsive: [
      {
        breakpoint: 1261,
        settings: {
          variableWidth: false
        }
      },
      {
        breakpoint: 620,
        settings: {
          variableWidth: false,
          slidesToShow: 2
        }
      },
      {
        breakpoint: 481,
        settings: {
          variableWidth: false,
          slidesToShow: 1,
          dots: false
        }
      }
    ]
  });
  ityped.init("#animate-typing", {
    strings: ['Медицинский сервисный информационный портал'],
    loop: false,
    showCursor: false,
  });
  $(".pop-up-button").on("click", function (event) {
    event.preventDefault();
    $(".black-out").fadeToggle(300);
    $(".pop-up-form").fadeToggle(300);
  });
  $(document).mouseup(function (e) {
    var elem = $(".pop-up-form");
    if (e.target != elem[0] && !elem.has(e.target).length) {
      $(".black-out").fadeOut(300);
      $(".pop-up-form").fadeOut(300);
    }
  });
  $('[href *= "#"]').on("click", function (e) {
    var anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $(anchor.attr("href")).offset().top
    }, 1000);
    e.preventDefault();
  });
});