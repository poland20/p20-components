import * as React from 'react';
import glamorous from 'glamorous';
import { colors, breakpoint } from '../variables';
import typography from '../typography';
import logo from './logo.svg';

const { rhythm } = typography;

const BrandLink = glamorous.a({
  // resets
  color: colors.dark,
  textDecoration: 'none',
  display: 'flex',
  alignItems: 'center',
  height: '100%',
  zIndex: 1000,
  top: 0,
  left: '50%',
  transform: 'translateX(-50%)',
  padding: '0 24px', // to make it easily clickable on mobile
  [breakpoint('medium')]: {
    // on the left on large devices
    position: 'static',
    transform: 'initial',
    padding: 0,
  },
});

const BrandLogo = glamorous.img({
  height: rhythm(2),
  marginTop: rhythm(0.5),
  marginBottom: rhythm(0.5),
});

const BrandName = glamorous.span({
  ...typography.scale(0.25),
  fontWeight: 300,
  display: 'none',
  marginTop: rhythm(1),
  marginBottom: rhythm(1),
  marginLeft: 12,
  [breakpoint('large')]: {
    display: 'block',
  },
});

export default () => (
  <BrandLink href="/" title="Poland 2.0 home">
    <BrandLogo src={logo} alt="Poland 2.0 logo" />
    <BrandName>Poland 2.0 Summit</BrandName>
  </BrandLink>
);
