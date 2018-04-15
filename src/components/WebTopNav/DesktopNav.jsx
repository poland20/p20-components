import * as React from 'react';
import glamorous from 'glamorous';
import type { MenuItem } from '.';
import typography from '../typography';
import { breakpoint, colors } from '../variables';
import { NavButton } from '../Button';

const { rhythm, scale } = typography;


type Props = {
  items: MenuItem[],
};

const Container = glamorous.nav({
  height: rhythm(3),
  display: 'none',
  [breakpoint('medium')]: {
    display: 'block',
  },
});

const MenuList = glamorous.ul({
  display: 'flex',
  flexDirection: 'row',
  listStyle: 'none',
  margin: 0,
  padding: 0,
});

const MenuListItem = glamorous.li({
  marginBottom: 0,
});

const MenuLink = glamorous.a({
  display: 'block',
  position: 'relative',
  ...scale(0),
  fontWeight: 300,
  textDecoration: 'none',
  color: colors.dark,
  padding: `${rhythm(1)} ${rhythm(0.5)}`,
  ':before': {
    content: '""',
    position: 'absolute',
    left: rhythm(0.5),
    bottom: `calc(${rhythm(1)} + 2px)`,
    backgroundColor: colors.dark,
    width: `calc(100% - ${rhythm(1)})`,
    height: 1,
    maxWidth: '0%',
    transition: 'max-width 125ms cubic-bezier(0.77, 0, 0.175, 1)',
  },
  ':hover': {
    ':before': {
      maxWidth: `calc(100% - ${rhythm(1)})`,
    },
  },
});


type ItemProps = {
  item: MenuItem,
}
const Item = ({ item }: ItemProps) => (
  <MenuListItem>
    {item.type === 'button'
    ? <NavButton href={item.url}>{item.title}</NavButton>
    : <MenuLink href={item.url} active={item}>{item.title}</MenuLink>
  }
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
