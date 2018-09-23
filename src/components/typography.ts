import * as Typography from 'typography';
import { colors, breakpointMin } from './variables';
import { css, injectGlobal } from 'emotion';
import styled from 'react-emotion';

import _stripe from './stripe.svg';

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

injectGlobal({
  small: {
    color: `${colors.darkGray}`,
    a: {
      textDecoration: 'none',
      fontStyle: 'italic',
      color: `${colors.link}`,
      '&:hover': {
        textDecoration: 'underline'
      }
    }
  }
});

export const { rhythm, scale } = typography;

export const Anchor = styled('a')<{ [propName: string]: any }>({
  cursor: 'pointer',
  display: 'inline-block',
  position: 'relative',
  fontWeight: 300,
  textDecoration: 'none',
  color: `${colors.dark}`,
  margin: `${rhythm(1)} ${rhythm(0.5)}`,
  [breakpointMin('tablet')]: {
    '&:before': {
      content: '""',
      position: 'absolute',
      top: rhythm(1),
      backgroundColor: `${colors.dark}`,
      width: '100%',
      height: 1,
      maxWidth: 0,
      transition: 'max-width 125ms cubic-bezier(0.77, 0, 0.175, 1)',
    },
    '&:hover': {
      '&:before': {
        maxWidth: '100%',
      },
    }
  }
});

export const bold = css({
  fontWeight: 600,
});

export const Center = styled('div')({ textAlign: 'center' });

export const fat = css({
  marginTop: rhythm(1),
  marginBottom: rhythm(2),
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
  lineHeight: rhythm(2),
  '&::before': {
    content: '""',
    width: '100%',
    display: 'block',
    position: 'absolute',
    bottom: -7,
    height: 7,
    backgroundImage: `url(${_stripe})`,
    backgroundSize: 'auto 100%',
    backgroundRepeat: 'repeat-x',
  },
});

export const thin = css({
  fontWeight: 300
});

export default typography;
