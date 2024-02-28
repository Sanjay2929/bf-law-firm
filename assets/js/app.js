// $(document).ready(function () {
//   $(".news_slider").slick({
//     dots: false,
//     infinite: true,
//     speed: 500,
//     pauseOnHover: true,
//     rtl: true,
//     slidesToScroll: 1,
//     slidesToShow: 3.5,
//     prevArrow: $(".slick-prev"),
//     nextArrow: $(".slick-next"),
//     responsive: [
//       {
//         breakpoint: 992,
//         settings: {
//           slidesToShow: 2.5,
//         },
//       },
//     ],
//   });
// });

$(".news_slider").slick({
  infinite: true,
  slidesToShow: 3.2,
  centerMode: true,
  centerPadding: "75px",
  slidesToScroll: 1,
  prevArrow: $(".slick-prev"),
  nextArrow: $(".slick-next"),
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2.2,
        centerPadding: "73px",
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1.1,
        centerPadding: "70px",
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
        slidesToShow: 1,
        centerPadding: "20px",
        autoplay: true,
        autoplaySpeed: 2000,
      },
    },
  ],
});
