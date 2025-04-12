import '/scss/about.scss';

// components
import { useTheme } from './components/theme';
import { useBurger } from './components/burger';
import { useHeroSlider, useOurTeamSlider } from './components/about/slider';

useTheme();
useBurger();
useHeroSlider();
useOurTeamSlider();
