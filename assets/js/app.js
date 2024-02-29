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
      breakpoint: 1537,
      settings: {
        slidesToShow: 3.2,
        centerPadding: "80px",
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
        centerPadding: "30px",
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
        slidesToShow: 1.01,
        centerPadding: "60px",
        autoplay: true,
        autoplaySpeed: 2000,
      },
    },
  ],
});
