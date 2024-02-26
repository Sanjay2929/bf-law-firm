$(document).ready(function () {
  $(".slider").slick({
    dots: false,
    infinite: false,
    speed: 500,
    centerMode: false,
    variableWidth: false,
    autoplay: true,
    slidesToScroll: 1,
    slidesToShow: 3.4,
    prevArrow: $(".slick-prev"),
    nextArrow: $(".slick-next"),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.5,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});
