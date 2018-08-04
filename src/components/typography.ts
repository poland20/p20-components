import * as Typography from 'typography';
import { colors } from './variables';

const fonts = ['Source Sans Pro',
  'Avenir Next',
  'Helvetica Neue',
  'Segoe UI',
  'Helvetica',
  'Arial',
  'sans-serif'];

const typography = new Typography({
  baseFontSize: '16px',
  baseLineHeight: 1.5,
  scaleRatio: 2.25,
  googleFonts: [
    {
      name: 'Source Sans Pro',
      styles: ['300', '400', '700'],
    },
  ],
  headerFontFamily: fonts,
  bodyFontFamily: fonts,
  bodyColor: colors.dark.toString(),
});

export function toPixels(remValue: number): number {
  return remValue / typography.options.baseFontSize;
}

export default typography;
