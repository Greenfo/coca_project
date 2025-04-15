import '/scss/blog.scss';

// components
import { useTheme } from './components/theme';
import { useBurger } from './components/burger';
import { useMixItUp } from './components/blog/mixitup';
import { useBlogHeroSlider } from './components/blog/slider';

useBlogHeroSlider();
useMixItUp();
useTheme();
useBurger();
