const ImplProject = {
  Init: function () {
    this.slickSlider();
  },

  slickSlider: function () {
    $('.js-static-images').slick({
      prevArrow: false,
      nextArrow: false,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      variableWidth: true,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });

    $('.js-business-partner').slick({
      prevArrow: false,
      nextArrow: false,
      infinite: true,
      speed: 300,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      slidesToShow: 7,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2
          }
        }
      ]
    });

    $('.js-why-we-box').slick({
      prevArrow: false,
      nextArrow: false,
      infinite: false,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      // autoplay: true,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });

    $('.js-our-service').slick({
      dots: true,
      centerMode: true,
      prevArrow: false,
      nextArrow: false,
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      centerPadding: 0,
      slidesToScroll: 1,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });
  },

  onLoad: function () {
    console.log('Onload Project');
  },

  reSize: function () {
    console.log('Resize Project');
  }
}

$(document).ready(function () {
  ImplProject.Init();

  var wow = new WOW(
    {
      boxClass: 'wow',      // animated element css class (default is wow)
      animateClass: 'animated', // animation css class (default is animated)
      offset: 0,          // distance to the element when triggering the animation (default is 0)
      mobile: true,       // trigger animations on mobile devices (default is true)
      live: true,       // act on asynchronously loaded content (default is true)
      callback: function (box) {
        // the callback is fired every time an animation is started
        // the argument that is passed in is the DOM node being animated
      },
      scrollContainer: null,    // optional scroll container selector, otherwise use window,
      resetAnimation: true,     // reset animation on end (default is true)
    }
  );
  wow.init();
});

$(window).on('load', function () {
  ImplProject.onLoad();
});

$(window).on('resize', function () {
  ImplProject.reSize();
});
