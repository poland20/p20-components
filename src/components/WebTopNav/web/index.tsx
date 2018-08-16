import * as React from 'react';
import styled from 'react-emotion';
import Container from 'components/Container/web';
import { breakpoint, colors } from 'components/variables';
import Brand from './Brand';
import DesktopNav from './DesktopNav';
import { MobileNavButton } from './MobileNav';
import { rhythm } from 'components/typography';

export type MenuItem = {
  title: string,
  url: string,
  active?: boolean,
  style?: 'link' | 'button';
  [propName: string]: any;
};

type Props = {
  items: MenuItem[];
};

type State = {
  open: boolean,
};

const navHeight = rhythm(3);

const Header = styled('header')({
  zIndex: 100,
  position: 'fixed',
  top: 0,
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
  [breakpoint('tablet')]: {
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

const MobileNavButtonContainer = styled('div')({
  position: 'absolute',
  right: 0,
  top: 0,
  bottom: 0,
  [breakpoint('tablet')]: {
    display: 'none',
  },
});

export default class WebTopNav extends React.Component<Props, State> {
  state = {
    open: false,
  };

  toggleNav = () => {
    this.setState(state => ({ open: !state.open }));
  }

  render() {
    return (
      <Header>
        <Container>
          <Layout>
            <Column>
              <Brand />
            </Column>
            <Column>
              <DesktopNav items={this.props.items} />
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
        {/* <MobileNav
          items={this.props.items}
          open={this.state.open}
          requestClose={this.toggleNav}
        /> */}
      </Header>
    );
  }
}
