const ImplProject = {
  Init: function () {
    this.slickSlider();
  },

  slickSlider: function () {
    $('.js-static-images').slick({
      arrows: false,
      autoplay: true,
      autoplaySpeed: 0,
      cssEase: 'linear',
      speed: 8000,
      slidesToShow: 4,
      slidesToScroll: 1,
      pauseOnFocus: false,
      pauseOnHover: false,
      swipe: false,
      touchMove: false,
      variableWidth: true,
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
      arrows: false,
      autoplay: true,
      autoplaySpeed: 0,
      cssEase: 'linear',
      speed: 8000,
      slidesToShow: 7,
      slidesToScroll: 1,
      pauseOnFocus: false,
      pauseOnHover: false,
      swipe: false,
      touchMove: false,
      variableWidth: true,
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
      arrows: false,
      speed: 800,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      swipeToSlide: true,
      edgeFriction: 0,
      touchThreshold: 10,
      adaptiveHeight: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            centerPadding: '0',
            slidesToShow: 1,
            variableWidth: false,
          }
        }
      ]
    });

    $('.js-our-service').slick({
      dots: true,
      centerMode: true,
      arrows: false,
      infinite: true,
      speed: 600,
      slidesToShow: 3,
      centerPadding: 0,
      slidesToScroll: 1,
      autoplay: true,
      responsive: [
        {
          breakpoint: 768,
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

  AOS.init({
    duration: 1200,
    easing: 'ease-out-quart'
  })
});

$(window).on('load', function () {
  ImplProject.onLoad();
});

$(window).on('resize', function () {
  ImplProject.reSize();
});
