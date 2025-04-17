import '/scss/blog.scss';

// components
import { useTheme } from './components/theme';
import { useBurger } from './components/burger';
import { useMixItUp } from './components/blog/mixitup';
import { useBlogHeroSlider, useBlogsSlider } from './components/blog/slider';

useBlogHeroSlider();
useBlogsSlider();
useMixItUp();
useTheme();
useBurger();
