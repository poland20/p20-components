// @flow
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Button, NavButton } from '../components/Button/web';

storiesOf('Button', module)
  .add('default view', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('hollow', () => <Button hollow onClick={action('clicked')}>Hollow Button</Button>)
  .add('NavButton', () => <NavButton href="https://google.com" target="_blank">Go to Google</NavButton>);
