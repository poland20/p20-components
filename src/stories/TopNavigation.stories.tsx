import * as React from 'react';
import { storiesOf } from '@storybook/react';
import TopNavigation from 'components/TopNavigation/web';

storiesOf('TopNavigation', module)
  .add('basic', () => {
    const items = [
      { title: 'About', url: '', active: true },
      { title: 'empowerPL', url: '', active: false },
      { title: 'Past Events', url: '', active: false },
      { title: 'Volunteering', url: '', active: false },
      { title: 'Tickets', url: '', type: 'button' }
    ];

    return <TopNavigation items={items}/>;
  });