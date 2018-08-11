import * as Color from 'color';
import memoize from '../helpers/memoize';

export const colors = {
  primary: Color('#E2445C'),
  dark: Color('#323232'),
  lightGray: Color('#F5F5F5'),
  mediumGray: Color('#cccccc'),
  darkGray: Color('#999999'),
  white: Color('#FFFFFF'),
  link: Color('#217AC0'),
  success: Color('#1ED760'),
  error: Color('#FF0033'),
};

interface Breakpoints {
  medium: number;
  large: number;
  xLarge: number;
}

export const breakpoints: Breakpoints = {
  medium: 768,
  large: 1024,
  xLarge: 1440,
};

type Breakpoint = keyof Breakpoints;

export const breakpoint = memoize((bp: Breakpoint | number) => {
  const bpValue = typeof bp === 'number' ? bp : breakpoints[bp];
  return `@media screen and (min-width: ${bpValue}px)`;
});
