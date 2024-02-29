$(".news_slider").slick({
  infinite: true,
  slidesToShow: 3.1,
  centerMode: true,
  centerPadding: "40px",
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
      breakpoint: 1400,
      settings: {
        slidesToShow: 2.1,
        centerPadding: "60px",
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2.1,
        centerPadding: "42px",
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
        slidesToShow: 1.1,
        centerPadding: "20px",
        autoplay: true,
        autoplaySpeed: 2000,
      },
    },
  ],
});
//  EMAIL JS
emailjs.init("LW2Wm7Cttqkugc2Tf");
function sendEmail(event) {
  event.preventDefault();
  const templateParams = {
    form_name: document.getElementById("form_name").value,
    form_email: document.getElementById("form_email").value,
    phone_number: document.getElementById("phone_number").value,
    message: document.getElementById("message").value,
  };
  emailjs.send("service_za4va8f", "template_1tzdvgw", templateParams).then(
    function (response) {
      console.log("Email sent successfully", response);
      resetForm();
    },
    function (error) {
      console.error("Email failed to send", error);
    }
  );
}
function resetForm() {
  document.getElementById("form_name").value = "";
  document.getElementById("form_email").value = "";
  document.getElementById("phone_number").value = "";
  document.getElementById("message").value = "";
}
