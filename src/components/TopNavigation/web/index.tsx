import * as React from 'react';
import styled, { css } from 'react-emotion';
import Container from 'components/Container/web';
import { breakpointMin, colors, breakpointMax } from 'components/variables';
import Brand from './Brand';
import DesktopNav from './DesktopNav';
import MobileNav, { MobileNavButton } from './MobileNav';
import { rhythm } from 'components/typography';

export type MenuItem = {
  title: string,
  url: string,
  active?: boolean,
  type?: 'link' | 'button';
  [propName: string]: any;
};

type Props = {
  items: MenuItem[];
  Router?: React.ComponentType<any>;
};

type State = {
  open: boolean,
};

const navHeight = rhythm(3);

const Header = styled('header')({
  zIndex: 100,
  position: 'fixed',
  top: -1, // fixes weird 1px space at the top on mobile
  paddingTop: 1,
  left: 0,
  right: 0,
  background: `${colors.white}`,
  boxShadow: '0 1px 2px 0 rgba(1, 1, 1, 0.05)',
  borderBottom: '1px solid rgba(1, 1, 1, 0.12)',
});

const Layout = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  [breakpointMin('tablet')]: {
    justifyContent: 'space-between',
  },
});

const Column = styled('div')({
  position: 'relative',
  height: navHeight,
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  '& + &': {
    marginLeft: rhythm(2),
  },
});

const brand = css({
  [breakpointMax('tablet')]: {
    position: 'absolute',
    top: 0,
    left: '50%',
    transform: 'translateX(-50%)'
  }
});

const MobileNavButtonContainer = styled('div')({
  position: 'absolute',
  right: 0,
  top: 0,
  bottom: 0,
  [breakpointMin('tablet')]: {
    display: 'none',
  },
});

export default class TopNavigation extends React.Component<Props, State> {
  state = {
    open: false,
  };

  componentDidUpdate() { // prevent root element from scrolling
    document.documentElement.style.overflow =
      this.state.open ? 'hidden' : 'scroll';
  }

  toggleNav = () => {
    this.setState(state => ({ open: !state.open }));
  }

  render() {
    return (
      <Header>
        <Container>
          <Layout>
            <Column className={brand}>
              <Brand Router={this.props.Router} />
            </Column>
            <Column>
              <DesktopNav items={this.props.items} Router={this.props.Router} />
            </Column>
          </Layout>
          <MobileNavButtonContainer>
            <MobileNavButton
              onClick={this.toggleNav}
              isOpen={this.state.open}
              navName="Mobile navigation"
            />
          </MobileNavButtonContainer>
        </Container>
        <MobileNav
          items={this.props.items}
          open={this.state.open}
          requestClose={this.toggleNav}
          Router={this.props.Router}
        />
      </Header>
    );
  }
}
