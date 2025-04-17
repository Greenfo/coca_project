import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
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

export const useBlogsSlider = () => {
  new Swiper('.blogs__slider', {
    modules: [Navigation],
    slidesPerView: 'auto',
    spaceBetween: 32,
    loop: true,
    navigation: {
      prevEl: '.blogs__btn--prev',
      nextEl: '.blogs__btn--next',
    },
  });
};
