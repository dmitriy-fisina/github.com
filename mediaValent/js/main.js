let windowsSize = function () {
  if ($(window).width() <= 720) {
    $(".mobile-live-result").on("click", function () {
      let offset = $(".live-result-mobile").offset();
      $("body, html").stop().animate({
        scrollTop: offset.top
      }, 1000)
    })
  }
}
let fillTable = function (name, result, cryptocurrency) {
  let rand;
  let profit;
  let cryptocurrencyRand
  let date = new Date()
  let tradeTime = date.toLocaleTimeString();
  for (let index = 0; index <= 10; index++) {
    rand = Math.floor(Math.random() * 20);
    cryptocurrencyRand = Math.floor(Math.random() * 10);
    profit = Math.floor(Math.random() * (786 - 87 + 1)) + 87;
    $(".tbody").append(`<tr><th>${name[rand]}</th><th>£${profit}</th><th>${tradeTime}</th><th>${cryptocurrency[cryptocurrencyRand]}</th><th>${result}</th></tr>`);
  }
}
let liveTrade = function (name, result, cryptocurrency) {
  let rand;
  let profit;
  let cryptocurrencyRand
  let date = new Date()
  let tradeTime = date.toLocaleTimeString();
  rand = Math.floor(Math.random() * 20);
  cryptocurrencyRand = Math.floor(Math.random() * 10);
  profit = Math.floor(Math.random() * (786 - 87 + 1)) + 87;
  $(".tbody").prepend(`<tr><th>${name[rand]}</th><th>£${profit}</th><th>${tradeTime}</th><th>${cryptocurrency[cryptocurrencyRand]}</th><th>${result}</th></tr>`);
  $(".tbody tr").last().remove();
}
$(document).ready(function () {
  $("#form").validate({
    rules: {
      name: {
        required: true,
        minlength: 2
      }
    },
    messages: {
      name: {
        required: "*The field must be filled",
        minlength: "*Enter more than two characters"
      },
      email: {
        required: "*The field must be filled",
        email: "*Enter a valid email address"
      }
    }
  });
  $(".clickToTop").on("click", function (e) {
    e.preventDefault();
    $('body,html').stop().animate({ scrollTop: 0 }, 1000);
    return false;
  })
  $('#slider-block').slick({
    arrows: false,
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    infinite: true,
    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  });
  let result = "<img src=\"./img/gold.png\"/>";
  const name = [
    "Oliver",
    "Jack",
    "Harry",
    "Jacob",
    "Charlie",
    "Thomas",
    "George",
    "Oscar",
    "James",
    "William",
    "Noah",
    "Liam",
    "Mason",
    "Jacob",
    "William",
    "Ethan",
    "Michael",
    "Alexander",
    "James",
    "Daniel"
  ];
  const cryptocurrency = [
    "EOS/ETH",
    "LTC/EOS",
    "ETH/LTC",
    "ETH/USD ",
    "ETH/KRW",
    "ETH/CAD",
    "ETH/GBP",
    "BTC/ETH",
    "ETH/PLN",
    "ETH/EUR",
  ];
  fillTable(name, result, cryptocurrency);
  setInterval(() => {
    liveTrade(name, result, cryptocurrency);
  }, 3000);
  $('[href *= "#"]').on("click", function (e) {
    var anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $(anchor.attr("href")).offset().top
    }, 1000);
    e.preventDefault();
  });
  $('[href *= "#faq"]').on("click", function (e) {
    var anchor = $(this);
    if ($(window).width() <= '990') {
      $('html, body').stop().animate({
        scrollTop: $(anchor.attr("href")).offset().top - 1500
      }, 1000);
      e.preventDefault();
    }
    else {
      $('html, body').stop().animate({
        scrollTop: $(anchor.attr("href")).offset().top - 900
      }, 1000);
      e.preventDefault();
    }
  });
  let wow = new WOW(
    {
      boxClass:     'wow',      
      animateClass: 'animated',
      offset:       0,
      mobile:       true,
      live:         true,      
      scrollContainer: null,
      resetAnimation: true,
    }
  );
  wow.init();
});
$(window).on("resize load", windowsSize);

