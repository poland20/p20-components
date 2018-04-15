// @flow
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Card from '../components/Card';

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
