import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Agenda from 'components/Agenda/web';
import { AgendaType, Day, EventType } from 'types/Agenda';
import { colors } from 'components/variables';

storiesOf('Agenda', module)
  .add('default view', () => {
    const event: EventType = {
      name: '$$$',
      type: 'Panel',
      description: 'lol',
      slug: 'dollars',
      // category: {
      //   name: 'Finance',
      //   color: '#587dad',
      // },
      time: {
        start: new Date('2018-11-24T09:00:00Z'),
        end: new Date('2018-11-24T11:00:00Z'),
      },
    };
    const day: Day = {
      name: `Friday, November 24th`,
      date: new Date('2018-11-24'),
      description: 'Lorem ipsum bla bla bla',
      venue: 'Imperial College',
      edition: '2018',
      image: 'https://via.placeholder.com/200',
      events: [event],
    };
    const agenda: AgendaType = { days: [day] };
    return (
      <div style={{ backgroundColor: `${colors.lightGray}` }}>
        <Agenda agenda={agenda}/>
      </div>
    );
  });
