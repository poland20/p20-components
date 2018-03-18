/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { TypographyStyle, GoogleFont } from 'react-typography';
import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { Welcome } from '@storybook/react/demo';
import typography from '../components/typography';

import Button from '../components/Button';
import Card from '../components/Card';

addDecorator(story => (
  <div style={{ margin: 16 }}>
    <TypographyStyle typography={typography} />
    <GoogleFont typography={typography} />
    {story()}
  </div>
));

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('hollow', () => <Button hollow onClick={action('clicked')}>Hollow Button</Button>);

storiesOf('Card', module)
  .add('basic', () => (<Card>Content</Card>))
  .add('with image', () => (
    <Card
      image="https://via.placeholder.com/400x400"
    >
      Content
    </Card>
  ))
  .add('clickable', () => (
    <Card
      image="https://via.placeholder.com/400x400"
      onClick={action('card clicked')}
    >
      Content
    </Card>
  ))
  .add('href', () => (
    <Card
      image="https://via.placeholder.com/400x400"
      href="#"
    >
      Content
    </Card>
  ))
  .add('with footer', () => (
    <Card
      image="https://via.placeholder.com/400x400"
      footer={<div>This is a footer</div>}
    >
      Content
    </Card>
  ));
