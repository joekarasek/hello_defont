(function($, HelloWorldDevsTysonSteele) {

  // ======= Fixes =======
  HelloWorldDevsTysonSteele.noOrphans('h1,h2,h3,h4,h5,h6,li,p', '.allow-orphan');
  HelloWorldDevsTysonSteele.scrollToFix('#primary-menu');

  // ======= Request Appointment Form =======
  HelloWorldDevsTysonSteele.requestAppointment('#mail-form', '#success_msg' , '7fb35345-752d-4792-9480-cd3db6674a62');

  // ======= Carousels =======
  HelloWorldDevsTysonSteele.marqueeCarousel({
    autoplay: 6000,
    effect: 'fade',
    speed: 500
  });
  HelloWorldDevsTysonSteele.tourCarousel('.js-tour-carousel', {
    autoplay: false,
    autoplayTimeout: 10000,
    items: 1,
    margin: 40,
    navText: [
      '<img src="assets/tour-left.png">',
      '<img src="assets/tour-right.png">'
    ],
    autoHeight: true,
    responsive: {
      768: {
        items: 2
      },
      992: {
        items: 3
      }
    }
  });
  HelloWorldDevsTysonSteele.tourCarousel('.js-services-carousel', {
    items: 1,
    margin: 40,
    navText: [
      '<img src="assets/services-left.png">',
      '<img src="assets/services-right.png">'
    ],
    autoHeight: true
  });
  HelloWorldDevsTysonSteele.tourCarousel('.js-services-carousel--two', {
    items: 1,
    loop: true,
    autoplay: true,
    autoplaySpeed: 500,
    autoplayTimeout: 2000,
    autoplayHoverPause:false,
    autoWidth: false,
    navText: [
      '<img src="assets/services-left.png">',
      '<img src="assets/services-right.png">'
    ],
    dots: false,
    margin: 30,
    slideBy: 1,
    responsive: {
      550: {
        items: 2
      },
      768: {
        items: 3
      },
      992: {
        items: 4
      },
      1200: {
        items: 3
      }
    }
  });
  HelloWorldDevsTysonSteele.tourCarousel('.js-services-carousel--two-mobile', {
    items: 1,
    loop: true,
    autoplay: true,
    autoplaySpeed: 500,
    autoplayTimeout: 2000,
    autoplayHoverPause:false,
    autoWidth: false,
    navText: [
      '<img src="assets/services-left.png">',
      '<img src="assets/services-right.png">'
    ],
    dots: false,
    margin: 30,
    slideBy: 1,
    responsive: {
      550: {
        items: 2
      },
      768: {
        items: 3
      },
      992: {
        items: 4
      }
    }
  });
  HelloWorldDevsTysonSteele.associationCarousel('.js-associations-carousel', {
    items: 2,
    loop: true,
    autoplay: true,
    autoplaySpeed: 500,
    autoplayTimeout: 2000,
    autoplayHoverPause:false,
    autoWidth: false,
    nav: false,
    dots: false,
    margin: 40,
    slideBy: 1,
    responsive: {
      550: {
        items: 3
      },
      992: {
        items: 4,
        autoplay: false
      }
    }
  });
  HelloWorldDevsTysonSteele.pyramidCarousel('.js-team-carousel', {
    items: 1,
    autoplay: true,
    navText: [
      '<img src="assets/arrow-left.png">',
      '<img src="assets/right-arrow.png">'
    ],
    responsive: {
      550: {
        items: 2
      }
    },
    margin: 30
  });
  HelloWorldDevsTysonSteele.updateCopyright('.js-copyright-year');

  // ======= Google Maps =======
  HelloWorldDevsTysonSteele.googleMap('#google-map5', '37.982493,-120.39034', '37.982493,-120.39034');

  $('#gallery-btn').click( function(e) {
    e.preventDefault();
    $('#gallery-target').click();
  });

  // ======= Tour Carousel fix redirects click event to lightbox image modal =======
  $('.js-tour-carousel img[data-lightbox-pointer]').each(function(index, element) {
    $(element).click(function() {
      var pointer = $(this).attr('data-lightbox-pointer');
      var target = '[data-lightbox-target="' + pointer + '"]';
      $(target).click();
    });
  });

  // ======= fix the tour loading and not having a size =======
  $('.js-tour-carousel').trigger('resize.owl.carousel');

}(jQuery, HelloWorldDevsTysonSteele));

