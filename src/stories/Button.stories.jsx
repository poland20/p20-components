// @flow
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Button, NavButton } from '../components/Button';

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('hollow', () => <Button hollow onClick={action('clicked')}>Hollow Button</Button>)
  .add('NavButton', () => <NavButton href="https://google.com">Go to Google</NavButton>);
