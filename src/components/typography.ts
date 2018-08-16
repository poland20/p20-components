import * as Typography from 'typography';
import { colors } from './variables';
import { css } from 'emotion';

const stripeSVG = require('./stripe.svg');

const fonts = ['Source Sans Pro',
  'Avenir Next',
  'Helvetica Neue',
  'Segoe UI',
  'Helvetica',
  'Arial',
  'sans-serif',
];

const typography = new Typography({
  baseFontSize: '16px',
  baseLineHeight: 1.5,
  scaleRatio: 2.375,
  googleFonts: [
    {
      name: 'Source Sans Pro',
      styles: ['300', '400', '400i', '600', '700'],
    },
  ],
  headerFontFamily: fonts,
  headerWeight: 300,
  bodyFontFamily: fonts,
  bodyColor: colors.dark.toString()
});

export const bold = css({
  fontWeight: 600,
});

export const fat = css({
  marginTop: [typography.rhythm(1)],
  marginBottom: [typography.rhythm(2)],
});

export const dangerousSuperscripts = (text: string) => {
  const ordinalRegexp = /\d+(st|th|rd|nd)/g;
  return { __html: text.replace(ordinalRegexp, (substr: string) => {
    const subscript = substr.replace(/\d+/, '');
    return substr.replace(subscript, `<sup>${subscript}</sup>`);
  })};
};

export const stripe = css({
  position: 'relative',
  display: 'inline-block',
  verticalAlign: 'top',
  lineHeight: [typography.rhythm(2)],
  '&::before': {
    content: '""',
    width: '100%',
    display: 'block',
    position: 'absolute',
    bottom: -7,
    height: 7,
    backgroundImage: `url(${stripeSVG})`,
    backgroundSize: 'auto 100%',
    backgroundRepeat: 'repeat-x',
  },
});

export const thin = css({
  fontWeight: 300
});

export const { rhythm, scale } = typography;

export default typography;
