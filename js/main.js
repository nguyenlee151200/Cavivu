new WOW().init();
$(document).ready(function () {
  $('.owl-carousel.business__owl').owlCarousel({
    loop: true,
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  });
  $('.owl-carousel.product-carousel').owlCarousel({
    loop: true,
    nav: true,
    dots: false,
    margin: 10,
    responsive: {
      0: {
        items: 1,
      },
      575: {
        items: 2,
      },
      1199: {
        items: 3,
      },
    },
  });
  $('.owl-carousel.interested__carousel').owlCarousel({
    loop: true,
    nav: true,
    dots: false,
    margin: 10,
    responsive: {
      0: {
        items: 1,
      },
      575: {
        items: 2,
      },
      1199: {
        items: 3,
      },
    },
  });
  $('.owl-carousel.news__carousel').owlCarousel({
    loop: true,
    nav: true,
    dots: false,
    margin: 10,
    responsive: {
      0: {
        items: 1,
      },
      575: {
        items: 2,
      },
      1199: {
        items: 3,
      },
    },
  });

  $('.partner.owl-carousel').owlCarousel({
    items: 6,
    loop: true,
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 3,
      },
      600: {
        items: 4,
      },
      1000: {
        items: 6,
      },
    },
  });

  $('#back').click(function () {
    $('html, body').animate({ scrollTop: 0 }, '3000');
  });
});
