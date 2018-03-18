/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { TypographyStyle, GoogleFont } from 'react-typography';
import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { Welcome } from '@storybook/react/demo';
import typography from '../components/typography';

import Button from '../components/Button';

addDecorator(story => (
  <div style={{ margin: 8 }}>
    <TypographyStyle typography={typography} />
    <GoogleFont typography={typography} />
    <p>Story time</p>
    {story()}
  </div>
));

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('hollow', () => <Button hollow onClick={action('clicked')}>Hollow Button</Button>);
