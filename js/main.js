function onSelect2() {
  $('.select2').select2();
}

function onSlickSlider() {
  $('.js-banner-slider').slick({
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [{
      breakpoint: 991,
      settings: {
        arrows: false
      }
    }]
  });

  $('.js-feedback').slick({
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [{
      breakpoint: 991,
      settings: {
        arrows: false
      }
    }]
  });

  $('.js-jobs').slick({
    arrows: false,
    dots: true,
    infinite: true,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 2000
  });

  $('.company-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    asNavFor: '.company-thumbnail'
  });

  $('.company-thumbnail').slick({
    slidesToShow: 8,
    slidesToScroll: 1,
    centerPadding: '0px',
    asNavFor: '.company-slider',
    dots: false,
    centerMode: true,
    arrows: false,
    focusOnSelect: true,
    responsive: [{
        breakpoint: 1199,
        settings: {
          slidesToShow: 5
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 3
        }
      }
    ]
  });
}

$(document).on('click', function(e) {
  if ($(e.target).closest('.js-icon-menu').length) {
    $('.js-menu-mobile').toggleClass('active');
  } else if (!$(e.target).closest('.js-menu-mobile').length) {
    $('.js-menu-mobile').removeClass('active');
  }
});

$('.js-icon-close').on('click', function() {
  $('.js-menu-mobile').removeClass('active');
});

$(document).ready(function() {
  onSelect2();
  onSlickSlider();
});

$(window).on('load', function() {
});

$(window).on('resize', function() {
});

