import * as React from 'react';
import styled from 'react-emotion';
// import moment from 'moment';

import typography, { bold, stripe, fat } from 'components/typography';
import Container from 'components/Container/web';
import { AgendaType } from 'types/Agenda';
import { DayList, DayItem, Description } from 'components/Agenda/Day';
import { EventList, Event } from 'components/Agenda/Event';
import { breakpoint, colors } from '../variables';

const { rhythm } = typography;

const Main = styled('main')({
  position: 'relative',
  marginBottom: rhythm(1),
});

const Center = styled('div')({ textAlign: 'center' });

const Heading = styled('h1')(bold, fat, stripe);

const Section = styled('section')({
  padding: `${rhythm(1)} 0`,
  backgroundColor: 'inherit',
});

const Timeline = styled('div')({
  position: 'absolute',
  top: rhythm(0.5),
  bottom: rhythm(0.5),
  left: -2,
  [breakpoint('tablet')]: {
    left: rhythm(0.5),
  },
  width: 4,
  backgroundColor: `${colors.primary}`,
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: `-${rhythm(0.5)}`,
    width: 0,
    height: 0,
    left: `-${rhythm(0.4)}`,
    borderLeft: `${rhythm(0.5)} solid transparent`,
    borderRight: `${rhythm(0.5)} solid transparent`,
    borderTop: `${rhythm(0.5)} solid ${colors.primary}`,
  },
});

interface Props {
  agenda: AgendaType;
}

export default class Agenda extends React.Component<Props> {
  render() {
    return (
      <Section>
        <Container>
          <Center>
            <Heading>
              Agenda
            </Heading>
          </Center>
          <Main>
            <DayList>
              {this.props.agenda.days.map((day, index) => {
                // const dayUTC = moment.utc(day.date);
                return (
                  <DayItem key={index}>
                    <Description>
                      <h3>{day.name}</h3>
                      {day.description && <div>{day.description}</div>}
                    </Description>
                    {day.events &&
                      <EventList>
                        {day.events.map((event, eventIndex) =>
                          <Event key={eventIndex} event={event}/>
                        )}
                      </EventList>
                    }
                  </DayItem>
                );
              })}
            </DayList>
            <Timeline/>
          </Main>
        </Container>
      </Section>
    );
  }
}
