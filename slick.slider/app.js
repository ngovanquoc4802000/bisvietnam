$(document).ready(function () {
  $(".product-slider").slick({
    slidesToShow: 4,
    dots: true,
    slidesToScroll: 2,
    infinite: true,
    lazyLoad: "ondemand",
    autoplay: true,
    autoplay : 1500,
    responsive: [
      {
        breakpoint: 740,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "100px",
          slidesToShow: 1,
        },
      },
    ],
  });
});

$(document).ready(function () {
  $("main").slick({
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplay : 1500,
    prevArrow: `<button type='button' class='slick-prev pull-left'><i class="fas fa-arrow-left"></i></button>`,
    nextArrow: `<button type='button' class='slick-next pull-right'><i class="fas fa-arrow-right"></i></button>`,
  });
});
