$(".news_slider").slick({
  infinite: true,
  slidesToShow: 3.2,
  centerMode: true,
  centerPadding: "110px",
  slidesToScroll: 1,
  prevArrow: $(".slick-prev"),
  nextArrow: $(".slick-next"),
  responsive: [
    {
      breakpoint: 1600,
      settings: {
        slidesToShow: 2.3,
        centerPadding: "200px",
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2.2,
        centerPadding: "82px",
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2.1,
        centerPadding: "40px",
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1.1,
        centerPadding: "55px",
        autoplay: true,
        autoplaySpeed: 2000,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1.1,
        centerPadding: "40px",
        autoplay: true,
        autoplaySpeed: 2000,
      },
    },
  ],
});
