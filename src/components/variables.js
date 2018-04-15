// @flow
import color from 'color';
import memoize from '../helpers/memoize';

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

export const breakpoints = {
  medium: 768,
  large: 1024,
  xLarge: 1440,
};

type Breakpoint = $Keys<typeof breakpoints>;

export const breakpoint = memoize((bp: Breakpoint | number) => {
  const bpValue = typeof bp === 'number' ? bp : breakpoints[bp];
  return `@media screen and (min-width: ${bpValue}px)`;
});
