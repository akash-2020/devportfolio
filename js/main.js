function openProject() {
  window.open("https://github.com/akash-2020/devportfolio", "_blank");
}

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    dots: true,
    margin: 10,
    responsiveClass: true,
    autoplay: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  });
});
