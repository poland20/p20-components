import * as React from 'react';
import glamorous from 'glamorous';
import SiteContainer from '../SiteContainer';
import { colors } from '../variables';
import typography from '../typography';
import Brand from './Brand';
import DesktopNav from './DesktopNav';

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
  justifyContent: 'space-between',
});

const Column = glamorous.div({
  height: navHeight,
  '& + &': {
    marginLeft: rhythm(2),
  },
});

export default class WebTopNav extends React.Component<Props, State> {
  state = {
    open: false,
  };

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
        </SiteContainer>
      </Container>
    );
  }
}
