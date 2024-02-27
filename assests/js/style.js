$(document).ready(function () {
  $(".slider").slick({
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: false,
    pauseOnHover: true,
    slidesToScroll: 1,
    slidesToShow: 3.5,
    prevArrow: $(".slick-prev"),
    nextArrow: $(".slick-next"),
    responsive: [
      {
        breakpoint: 1140,
        settings: {
          slidesToShow: 3,
        },
      },
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
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});
