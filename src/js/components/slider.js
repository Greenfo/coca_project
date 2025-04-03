// import Swiper JS
import Swiper from 'swiper';
// import Swiper styles
import 'swiper/css';

export const useInsightSlider = () => {
  const insightSlider = new Swiper('.insight__slider', {
    slidesPerView: 'auto',
    spaceBetween: 32,
    loop: true,
    centeredSlides: true,
    breakpoints: {
      993: {
        centeredSlides: false,
      },
    },
  });
};
