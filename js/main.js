
const LacquanProject = {
  Init: function () {
    this.slickSlider();
  },

  slickSlider: function () {
    $('.js_banner-slider').slick({
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      autoplay: true,
    });

    $('.js_slider').slick({
      arrows: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      dots: false,
      autoplay: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            dots: false,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            dots: false,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
          }
        }
      ]
    });

    $('.js_testimonial-slider').slick({
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      autoplay: true,
    });
  },

  onLoad: function () {
    console.log('Onload Project');
  },

  reSize: function () {
    console.log('Resize Project');
  }
}

$(document).ready(function (e) {
  LacquanProject.Init();

  AOS.init({
    duration: 1200,
    easing: 'ease-out-quart'
  })

  $(document).on('click', function (e) {
    if ($(e.target).closest('.js-icon-menu').length) {
      $('.js-menu-mobile').toggleClass('active');
    } else if (!$(e.target).closest('.js-menu-mobile').length) {
      $('.js-menu-mobile').removeClass('active');
    }
  });

  $('.js-icon-close').on('click', function (e) {
    $('.js-menu-mobile').removeClass('active');
  });

  $(window).bind('scroll', function () {
		if ($(window).scrollTop() > 95) {
			$('.js_header').addClass('fixed');
		} else {
			$('.js_header').removeClass('fixed');
		}
	});
});

$(window).on('load', function () {
  LacquanProject.onLoad();
});

$(window).on('resize', function () {
  LacquanProject.reSize();
});
