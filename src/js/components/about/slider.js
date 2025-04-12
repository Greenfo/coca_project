import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

export const useHeroSlider = () => {
  new Swiper('.hero__slider', {
    modules: [Navigation],
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
