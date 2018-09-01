import memoize from '../helpers/memoize';
import { css } from 'react-emotion';

const color = require('color'); // to satisfy both webpack and rollup...

export const colors = {
  primary: color('#E2445C'),
  dark: color('#323232'),
  lightGray: color('#F5F5F5'),
  mediumGray: color('#cccccc'),
  darkGray: color('#999999'),
  white: color('#FFFFFF'),
  link: color('#217AC0'),
  success: color('#1ED760'),
  error: color('#FF0033'),
};

export const featherShadow = css({
  boxShadow: '0 1px 2px 0 rgba(1, 1, 1, 0.05)',
});

interface Breakpoints {
  mobile: number;
  tablet: number;
  desktop: number;
}

export const breakpoints: Breakpoints = {
  mobile: 512,
  tablet: 768,
  desktop: 1024,
};

type Breakpoint = keyof Breakpoints;

export const breakpointMin = memoize((bp: Breakpoint | number) => {
  const bpValue = typeof bp === 'number' ? bp : breakpoints[bp];
  return `@media screen and (min-width: ${bpValue}px)`;
});

export const breakpointMax = memoize((bp: Breakpoint | number) => {
  const bpValue = typeof bp === 'number' ? bp : breakpoints[bp];
  return `@media screen and (max-width: ${bpValue}px)`;
});
