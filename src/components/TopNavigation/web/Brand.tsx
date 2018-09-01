import * as React from 'react';
import styled from 'react-emotion';
import { colors } from 'components/variables';
import { rhythm } from 'components/typography';

import * as logo from './logo.svg';

const BrandLink = styled('a')({
  // resets
  color: `${colors.dark}`,
  textDecoration: 'none',
  display: 'flex',
  alignItems: 'center',
  height: '100%',
  zIndex: 1000,
  padding: `0 ${rhythm(1)}`, // to make it easily clickable on mobile
});

const BrandLogo = styled('img')({
  height: rhythm(2),
  marginTop: rhythm(0.5),
  marginBottom: rhythm(0.5),
});

export default () => (
  <BrandLink href="/" title="Poland 2.0 home">
    <BrandLogo src={`${logo}`} alt="Poland 2.0 logo"/>
  </BrandLink>
);
