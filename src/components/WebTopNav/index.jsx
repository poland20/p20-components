import * as React from 'react';
import glamorous from 'glamorous';
import SiteContainer from '../SiteContainer';
import { breakpoint, colors } from '../variables';
import typography from '../typography';
import Brand from './Brand';
import DesktopNav from './DesktopNav';
import MobileNav, { MobileNavButton } from './MobileNav';

const { rhythm } = typography;

export type MenuItem = {
  title: string,
  url: string,
  active?: boolean,
  style?: 'link' | 'button';
};

type Props = {
  items: MenuItem[];
}

type State = {
  open: boolean,
};

const navHeight = rhythm(3);

const Container = glamorous.header({
  zIndex: 100,
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  background: colors.white,
  boxShadow: '0 1px 2px 0 rgba(1, 1, 1, 0.05)',
  borderBottom: '1px solid rgba(1, 1, 1, 0.12)',
});

const Layout = glamorous.div({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  [breakpoint('medium')]: {
    justifyContent: 'space-between',
  },
});

const Column = glamorous.div({
  position: 'relative',
  height: navHeight,
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  '& + &': {
    marginLeft: rhythm(2),
  },
});

const MobileNavButtonContainer = glamorous.div({
  position: 'absolute',
  right: 0,
  top: 0,
  bottom: 0,
  [breakpoint('medium')]: {
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
      <Container>
        <SiteContainer>
          <Layout>
            <Column>
              <Brand />
            </Column>
            <Column>
              <DesktopNav items={this.props.items} />
            </Column>
          </Layout>
          <MobileNavButtonContainer>
            <MobileNavButton onClick={this.toggleNav} isOpen={this.state.open} />
          </MobileNavButtonContainer>
        </SiteContainer>
        <MobileNav
          items={this.props.items}
          open={this.state.open}
          requestClose={this.toggleNav}
        />
      </Container>
    );
  }
}
