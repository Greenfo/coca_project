import '../assets/scss/main.scss';
import { Navigation } from 'swiper/modules';

// components
import { useTheme } from './components/theme';
import { useBurger } from './components/burger';
import {
  useInsightSlider,
  useTestimonialsSlider,
} from './components/home/slider';

useTheme();
useBurger();
useInsightSlider();
useTestimonialsSlider();
