import * as React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Container, Content, Text } from 'native-base';
import { Button, NavButton } from 'components/Button/web';

import AndroidButton from 'components/Button/android';

storiesOf('Button', module)
  .add('default view', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('default view (Android)', () => (
    <Container>
      <Content>
        <AndroidButton>
          <Text>Hello Android</Text>
        </AndroidButton>
      </Content>
    </Container>
  ))
  .add('hollow', () => (
    <Button hollow={true} onClick={action('clicked')}>Hollow Button</Button>
  ))
  .add('NavButton', () => (
    <NavButton href="https://google.com" target="_blank">Go to Google</NavButton>
  ));
