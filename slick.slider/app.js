$(document).ready(function () {
  $(".active").slick({
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
   
  });
});


$(document).ready(function () {
  $("main").slick({
    infinite: true,
    speed: 500,
    prevArrow: `<button type='button' class='slick-prev pull-left'><i class="fas fa-arrow-left"></i></button>`,
    nextArrow: `<button type='button' class='slick-next pull-right'><i class="fas fa-arrow-right"></i></button>`,
  });
});
