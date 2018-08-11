import * as React from 'react';
import { css } from 'react-emotion';
import typography from '../typography';
import { colors } from '../variables';
// import withProps from 'recompose/withProps';
import { MenuItem } from './web';

const { rhythm } = typography;
const transition = ' 200ms cubic-bezier(0.77, 0, 0.175, 1)';
const iconWidth = 28.284;
const iconHeight = 20;

const button = css({
  outline: 'none',
  cursor: 'pointer',
  WebkitAppearance: 'none',
  border: 'none',
  background: 'none',
  padding: `${rhythm(1)} 0`,
  margin: 0,
  position: 'relative',
  height: rhythm(3),
  width: rhythm(3),
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const bar = css({
  display: 'block',
  position: 'absolute',
  top: 0,
  backgroundColor: `${colors.dark}`,
  width: iconWidth,
  height: 1,
  transformOrigin: 'left',
  transform: 'scale(1)',
  transition: `transform ${transition}, background-color ${transition}`,
  ':nth-child(2)': {
    top: (iconHeight - 1) / 2,
  },
  ':nth-child(3)': {
    top: iconHeight - 1,
  },
  ':last-child': {
    transform: 'scaleX(0.62)',
  },
});

const isOpenClass = css({
  [`& .${bar}`]: {
    ':nth-child(1)': {
      transform: `translateX(${(iconWidth - iconHeight) / 2}px) rotate(45deg)`,
    },
    ':nth-child(2)': {
      transform: 'scaleX(0)',
    },
    ':nth-child(3)': {
      transform: `translateX(${(iconWidth - iconHeight) / 2}px) rotate(-45deg)`,
    },
  },
});

const icon = css({
  width: iconWidth,
  height: iconHeight,
  display: 'block',
  position: 'relative',
});

export const MobileNavIcon = ({ isOpen }: { isOpen: boolean }) => (
  <div className={`${icon} ${isOpen ? isOpenClass : ''}`}>
    <span className={bar} />
    <span className={bar} />
    <span className={bar} />
  </div>
);

type HamburgerProps = {
  onClick: () => void,
  navName: string,
  isOpen: boolean,
};

export const MobileNavButton = ({ onClick, navName, isOpen }: HamburgerProps) => (
  <button
    aria-controls={`#${navName}`}
    onClick={onClick}
    className={button}
  >
    <MobileNavIcon isOpen={isOpen} />
  </button>
);

// export const MobileNavButton = withProps({ isOpen: false })(_MobileNavButton);

type NavProps = {
  items: MenuItem[],
  open: boolean,
};

export default ({ items, open }: NavProps) => (
  // <div>{items.toString()}{open}</div>
  null
);
