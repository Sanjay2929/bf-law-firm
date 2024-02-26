$(document).ready(function () {
  $(".slider").slick({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: $(".slick-prev"),
    nextArrow: $(".slick-next"),
  });
});
