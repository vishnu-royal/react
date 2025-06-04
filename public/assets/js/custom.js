( function($) {
  'use strict';

  $(function () {
    var $nav = $(".nav-bar");

    function handleScroll() {
        if ($(window).width() >= 320) {
            var scroll = $(window).scrollTop();
            if (scroll >= 300) {
                $nav.removeClass('-translate-y-full').addClass('translate-y-0');
            } else {
                $nav.removeClass('translate-y-0').addClass('-translate-y-full');
            }
        } else {
            // Mobile: ensure it's visible (or hidden depending on design)
            $nav.removeClass('translate-y-0').addClass('-translate-y-full');
        }
    }

    $(window).on("scroll resize", handleScroll);
    handleScroll(); // run once on page load
});


const swiper = new Swiper(".mySwiper4", {
    slidesPerView: 'auto',
    // slidesPerView: 1.5,
    spaceBetween: 15,
    freeMode: true,
    loop: false,
    navigation: {
      nextEl: ".custom-next",
      prevEl: ".custom-prev",
    },
    breakpoints: {
      640: {
        slidesPerView: 2.2,
      },
      768: {
        slidesPerView: 3.5,
      },
      1024: {
        slidesPerView: 4.6,
      },
    },
  });

$(document).ready(function () {
  var owl = $('.4_5owlCarouselstyle');

  owl.owlCarousel({
    margin: 15,
    loop: true,
    dots: false,
    nav: false,
    autoplay: false,
    autoplayTimeout: 2000,
    autoplayHoverPause: false,
    responsive: {
      0: {
        items: 1,
        stagePadding: 50
      },
      600: {
        items: 1,
        stagePadding: 50
      },
      992: {
        items: 3,
        stagePadding: 100
      },
      1024: {
        items: 3,
        stagePadding: 100
      },
      1200: {
        items: 4,
        stagePadding: 100
      }
    }
  });

  // Custom navigation button events
  $('.customPrevBtn').click(function () {
    owl.trigger('prev.owl.carousel');
  });

  $('.customNextBtn').click(function () {
    owl.trigger('next.owl.carousel');
  });
 });



$(document).ready(function () {
  var owl = $('.foutHalfowlCarouselstyle');
  owl.owlCarousel({
    margin: 20,
    stagePadding: 20,
    loop: true,
    dots: false,
    nav: false, 
    autoplay: false,
    autoplayTimeout: 2000,
    autoplayHoverPause: false,
    responsive: {
      0: { 
        items: 2,
        stagePadding: 0,
        margin: 10
       },
      600: { 
        items: 2,
        stagePadding: 20,
        margin: 10
       },
      992: { 
        items: 3,
        stagePadding: 20
       },
      1200: { 
        items: 4,
        stagePadding: 20 }
    }
    
  });
  $('.customPrevBtnMeet').click(function () {
    owl.trigger('prev.owl.carousel');
  });
  $('.customNextBtnMeet').click(function () {
    owl.trigger('next.owl.carousel');
  });
 });

 
$(document).ready(function () {
  var owl = $('.4travel_community');
  owl.owlCarousel({
    margin: 20,
    stagePadding: 50,
    loop: true,
    dots: false,
    nav: false, 
    autoplay: false,
    autoplayTimeout: 2000,
    autoplayHoverPause: false,
    responsive: {
      0: { 
        items: 1,
        stagePadding: 50,
        margin: 10
       },
      600: { 
        items: 2,
        stagePadding: 50,
        margin: 10
       },
      992: { 
        items: 3,
        stagePadding: 0
       },
      1200: { 
        items: 4,
        stagePadding: 0 }
    }
  });

  $('.customPrevBtnCommunity').click(function () {
    owl.trigger('prev.owl.carousel');
  });

  $('.customNextBtnCommunity').click(function () {
    owl.trigger('next.owl.carousel');
  });
});


$(document).ready(function () {
  var owl = $('.3_5owlCarouselstyle');

  owl.owlCarousel({
    margin: 15,
    stagePadding: 100,
    loop: true,
    dots: false,
    nav: false, // Enables internal nav logic
    autoplay: false,
    autoplayTimeout: 2000,
    autoplayHoverPause: false,
    responsive: {
      0: {
        items: 1,
        stagePadding: 0
      },
      600: {
        items: 1,
        stagePadding: 50
      },
      992: {
        items: 3,
        stagePadding: 100
      },
      1024: {
        items: 3,
        stagePadding: 100
      },
      1200: {
        items: 3,
        stagePadding: 100
      }
    }
  });

  $('.customPrevBtn').click(function () {
    owl.trigger('prev.owl.carousel');
  });

  $('.customNextBtn').click(function () {
    owl.trigger('next.owl.carousel');
  });
});


$(document).ready(function () {
  var owl = $('.featured-experts-owl');

  owl.owlCarousel({
    margin: 15,
    stagePadding: 130,
    loop: true,
    dots: false,
    nav: false, // Enables internal nav logic
    autoplay: false,
    autoplayTimeout: 2000,
    autoplayHoverPause: false,
    responsive: {
      0: {
        items: 1,
        stagePadding: 0
      },
      600: {
        items: 1,
        stagePadding: 50
      },
      992: {
        items: 3,
        stagePadding: 100
      },
      1024: {
        items: 3,
        stagePadding: 100
      },
      1200: {
        items: 3,
        stagePadding:130
      }
    }
  });

  $('.customPrevBtn').click(function () {
    owl.trigger('prev.owl.carousel');
  });

  $('.customNextBtn').click(function () {
    owl.trigger('next.owl.carousel');
  });
});



$(document).ready(function () {
  var owl = $('.success-stories-owl');

  owl.owlCarousel({
    margin: 15,
    stagePadding: 50,
    loop: true,
    dots: false,
    nav: false, // Enables internal nav logic
    autoplay: false,
    autoplayTimeout: 2000,
    autoplayHoverPause: false,
    responsive: {
      0: {
        items: 1,
        stagePadding: 0
      },
      600: {
        items: 1,
        stagePadding: 50
      },
      992: {
        items: 3,
        stagePadding: 50
      },
      1024: {
        items: 3,
        stagePadding: 50
      },
      1200: {
        items: 3,
        stagePadding:50
      }
    }
  });

  $('.customPrevBtn').click(function () {
    owl.trigger('prev.owl.carousel');
  });

  $('.customNextBtn').click(function () {
    owl.trigger('next.owl.carousel');
  });
});





$(document).ready(function () {
  $('.bar-menu-toggle').click(function () {
    // Toggle menu display
    $('.mob-menu').toggleClass('hidden');

    // Toggle icon
    const isOpen = $('.mob-menu').hasClass('hidden');

    // Set icon based on menu state
    const iconHtml = isOpen
      ? `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
          fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
          stroke-linejoin="round" class="lucide lucide-menu h-6 w-6">
          <line x1="4" x2="20" y1="12" y2="12"></line>
          <line x1="4" x2="20" y1="6" y2="6"></line>
          <line x1="4" x2="20" y1="18" y2="18"></line>
        </svg>`
      : `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
          fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
          stroke-linejoin="round" class="lucide lucide-x h-6 w-6">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>`;

    $('.menu-icon').html(iconHtml);
  });
});





    $('.clickme a').click(function(e){
        e.preventDefault();

        $('.clickme a').removeClass('activelink');
        $(this).addClass('activelink');

        var tagid = $(this).data('tag').toLowerCase();

        if(tagid === 'all') {
            $('.custom-tab .tab-list').addClass('active').show();
        } else {
            $('.custom-tab .tab-list').removeClass('active').hide();
            $('#' + tagid).addClass('active').show();
        }
    });


    $('#btn-grid').on('click', function () {
            $('#view-wrapper')
                .removeClass('flex flex-col space-y-6')
                .addClass('grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6');

            $(this).addClass('bg-primary/10 text-primary');
            $('#btn-list').removeClass('bg-primary/10 text-primary').addClass('bg-white text-slate-500');
        });

        $('#btn-list').on('click', function () {
            $('#view-wrapper')
                .removeClass('grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6')
                .addClass('flex flex-col space-y-6');

            $(this).addClass('bg-primary/10 text-primary');
            $('#btn-grid').removeClass('bg-primary/10 text-primary').addClass('bg-white text-slate-500');
        });


        $('#toggle-filters').on('click', function () {
        $('#filter-experts-block').slideToggle(); // Smooth open/close
    });


     const rangeInput = document.getElementById('rating-range');
  const valueDisplay = document.getElementById('rating-value');
  const fill = document.getElementById('range-fill');

  function updateSlider() {
    const min = parseFloat(rangeInput.min);
    const max = parseFloat(rangeInput.max);
    const val = parseFloat(rangeInput.value);
    const percent = ((val - min) / (max - min)) * 100;

    fill.style.width = `${percent}%`;
    valueDisplay.textContent = `${val}+`;
  }

  rangeInput.addEventListener('input', updateSlider);
  updateSlider(); // Initialize

 const thumbSwiper = new Swiper(".thumb-slider", {
      spaceBetween: 10,
      slidesPerView: 3,
      freeMode: true,
      watchSlidesProgress: true,
    });

    const mainSwiper = new Swiper(".main-slider", {
      spaceBetween: 10,
      thumbs: {
        swiper: thumbSwiper,
      },
    });



})(jQuery);