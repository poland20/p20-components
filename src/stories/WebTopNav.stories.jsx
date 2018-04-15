// @flow
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import WebTopNav from '../components/WebTopNav';

storiesOf('WebTopNav', module)
  .add('basic', () => (
    <WebTopNav
      items={[
        { title: 'About', url: '/about', active: false },
        { title: 'Partners', url: '/#partners', active: false },
        { title: 'Speakers', url: '/#speakers', active: false },
        { title: 'Agenda', url: '/#agenda', active: false },
        { title: 'Tickets', url: 'https://poland20.com/tickets', type: 'button' },
      ]}
    />
  ));
