import * as React from 'react';
import styled from 'react-emotion';
import { MenuItem } from '.';
import typography, { Anchor } from 'components/typography';
import { breakpointMin } from 'components/variables';
import { NavButton } from 'components/Button/web';

const { rhythm } = typography;

type Props = {
  items: MenuItem[],
};

const Container = styled('nav')({
  height: rhythm(3),
  display: 'none',
  [breakpointMin('tablet')]: {
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
  marginBottom: 0
});

type ItemProps = {
  item: MenuItem,
};

const Item = ({ item }: ItemProps) => (
  <MenuListItem>
    {item.type === 'button'
    ? <span style={{ padding: `0 ${rhythm(0.5)}` }}>
        <NavButton
          href={item.url}
          rel="noopener noreferrer"
          target="_blank"
        >
          {item.title}
        </NavButton>
      </span>
    : <Anchor href={item.url} active={item}>{item.title}</Anchor>}
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
