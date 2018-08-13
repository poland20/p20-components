import * as React from 'react';
import styled from 'react-emotion';
import { MenuItem } from './web';
import typography from '../typography';
import { breakpoint, colors } from '../variables';
import { NavButton } from '../Button/web';

const { rhythm, scale } = typography;

type Props = {
  items: MenuItem[],
};

const Container = styled('nav')({
  height: rhythm(3),
  display: 'none',
  [breakpoint('tablet')]: {
    display: 'block',
  },
});

const MenuList = styled('ul')({
  display: 'flex',
  flexDirection: 'row',
  listStyle: 'none',
  margin: 0,
  padding: 0,
});

const MenuListItem = styled('li')({
  marginBottom: 0,
});

interface MenuLinkType {
  [propName: string]: any;
}

const MenuLink = styled('a')<MenuLinkType>(
  {
    display: 'block',
    position: 'relative',
    fontWeight: 300,
    textDecoration: 'none',
    color: `${colors.dark}`,
    padding: `${rhythm(1)} ${rhythm(0.5)}`,
    '&:before': {
      content: '""',
      position: 'absolute',
      left: rhythm(0.5),
      bottom: `calc(${rhythm(1)} + 2px)`,
      backgroundColor: `${colors.dark}`,
      width: `calc(100% - ${rhythm(1)})`,
      height: 1,
      maxWidth: '0%',
      transition: 'max-width 125ms cubic-bezier(0.77, 0, 0.175, 1)',
    },
    '&:hover': {
      '&:before': {
        maxWidth: `calc(100% - ${rhythm(1)})`,
      },
    },
  },
  `${scale(0)}`,
);

type ItemProps = {
  item: MenuItem,
};

const Item = ({ item }: ItemProps) => (
  <MenuListItem>
    {item.type === 'button'
    ? <NavButton href={item.url}>{item.title}</NavButton>
    : <MenuLink href={item.url} active={item}>{item.title}</MenuLink>}
  </MenuListItem>
);

function renderMenuItem(item: MenuItem) {
  return (
    <Item item={item} key={item.url}>{item.title}</Item>
  );
}

export default ({ items }: Props) => (
  <Container
    aria-label="Desktop navigation"
  >
    <MenuList>
      {items.map(renderMenuItem)}
    </MenuList>
  </Container>
);
