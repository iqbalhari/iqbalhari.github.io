var swiper = new Swiper(".slide-container", {
  slidesPerView: 'auto',
  spaceBetween: 20,
  sliderPerGroup: 4,
  speed: 600,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    400: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    1000: {
      slidesPerView: 3,
    },
    1120: {
      slidesPerView: 4,
    },
    1300: {
      slidesPerView: 3,
    },
    1400: {
      slidesPerView: 3,
    },
    1600: {
      slidesPerView: 4,
    }
  },
  loop: true,
});
