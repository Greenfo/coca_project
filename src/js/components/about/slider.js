import Swiper from 'swiper';
import 'swiper/css';

export const useHeroSlider = () => {
  new Swiper('.hero__slider', {
    slidesPerView: 1,
    spaceBetween: 32,
    breakpoints: {
      1201: {
        slidesPerView: 2.5,
      },
      769: {
        slidesPerView: 2,
      },
    },
  });
};

export const useOurTeamSlider = () => {
  new Swiper('.our-team__slider', {
    slidesPerView: 'auto',
    spaceBetween: 32,
    centeredSlides: true,
    loop: true,
    breakpoints: {
      993: {
        centeredSlides: false,
      },
    },
  });
};
