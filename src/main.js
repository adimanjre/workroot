// This code should be added to <head>.

import { TweenLite, TimelineMax, Linear, Back, Sine } from '../node_modules/gsap/all.js';

// It's used to prevent page load glitches.
const html = document.querySelector('html');
const isLightOrAuto = localStorage.getItem('hs_theme') === 'light' || (localStorage.getItem('hs_theme') === 'auto' && !window.matchMedia('(prefers-color-scheme: dark)').matches);
const isDarkOrAuto = localStorage.getItem('hs_theme') === 'dark' || (localStorage.getItem('hs_theme') === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches);

if (isLightOrAuto && html.classList.contains('dark')) html.classList.remove('dark');
else if (isDarkOrAuto && html.classList.contains('light')) html.classList.remove('light');
else if (isDarkOrAuto && !html.classList.contains('dark')) html.classList.add('dark');
else if (isLightOrAuto && !html.classList.contains('light')) html.classList.add('light');

gsap.registerPlugin(ScrollTrigger);



