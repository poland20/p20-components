import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Agenda from 'components/Agenda/web';
import { AgendaType, Day, EventType, EventSpeaker, EventVenue } from 'types/Agenda';
import { colors } from 'components/variables';

storiesOf('Agenda', module)
  .add('default view', () => {
    // neo0odaflcssjzf7uwxm

    const place: EventVenue = {
      name: 'Skempton Building',
      location: {
        street1: 'Imperial College London',
        street2: 'Kensington',
        suburb: 'London',
        postcode: 'SW7 2AZ'
      }
    };

    const speaker: EventSpeaker = {
      name: 'Janusz',
      photo: {
        secure_url: 'pqrpqwsuvg2mynfi2pvo'
      }
    };

    const event: EventType = {
      name: 'Why Fintechs Will Kill Banks in a Swift Move',
      type: 'Panel',
      description: 'We are proud to host top leaders from industry,\
 government, and academia in the Finance block.',
      slug: 'dollars',
      category: {
        name: 'Finance',
        color: '#587dad',
      },
      time: {
        startDate: new Date('2018-11-24T09:00:00Z'),
        endDate: new Date('2018-11-24T11:00:00Z'),
      },
      speakers: [speaker, speaker, speaker, speaker, speaker],
      venue: place
    };

    const day: Day = {
      name: `Friday, November 24th`,
      date: new Date('2018-11-24'),
      description: 'Lorem ipsum bla bla bla',
      venue: 'Imperial College',
      events: [event, event],
    };

    const agenda: AgendaType = { days: [day, day] };

    return (
      <div style={{ backgroundColor: `${colors.lightGray}` }}>
        <Agenda agenda={agenda}/>
      </div>
    );
  });
