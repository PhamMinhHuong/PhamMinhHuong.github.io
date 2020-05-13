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

function onDonutchart() {
  var radius = parseInt($('.donut-progress').attr('r'));
  var perimeter = 2 * 3.14 * radius;

  $('.donut-progress').each(function() {
    var amount = parseFloat($(this).attr('data-fill'));
    var fillAmount = perimeter - (perimeter * amount) / 100;

    $(this).attr({
      'stroke-dasharray': perimeter,
      'stroke-dashoffset': fillAmount,
    });
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
  onDonutchart();
});

$(window).on('load', function() {
});

$(window).on('resize', function() {
});

