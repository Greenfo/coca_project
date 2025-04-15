import Swiper from 'swiper';
import 'swiper/css';

export const useBlogHeroSlider = () => {
  const BlogHeroSlider = new Swiper('.hero__slider', {
    slidesPerView: 'auto',
    spaceBetween: 32,
    breakpoints: {
      1201: {
        slidesPerView: 2.5,
      },
    },
  });
};
