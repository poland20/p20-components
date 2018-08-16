import * as React from 'react';
import styled from 'react-emotion';

import { bold, stripe, fat, dangerousSuperscripts, rhythm, Center } from 'components/typography';
import Container from 'components/Container/web';
import { AgendaType } from 'types/Agenda';
import { DayList, DayItem, Description } from './Day';
import { EventList, Event } from './Event';
import { colors } from 'components/variables';

const Main = styled('main')({
  position: 'relative',
  marginBottom: rhythm(1),
});

const Heading = styled('h1')(bold, fat, stripe);

const Section = styled('section')({
  padding: `${rhythm(1)} 0`,
  backgroundColor: 'inherit',
});

const Timeline = styled('div')({
  position: 'absolute',
  top: rhythm(0.5),
  bottom: rhythm(0.5),
  left: rhythm(0.6),
  width: 4,
  backgroundColor: `${colors.primary}`,
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: `-${rhythm(0.5)}`,
    width: 0,
    height: 0,
    left: `-${rhythm(0.45)}`,
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
                return (
                  <DayItem key={index}>
                    <Description>
                      <h3 dangerouslySetInnerHTML={dangerousSuperscripts(day.name)}/>
                      {day.description && <p>{day.description}</p>}
                    </Description>
                    {day.events &&
                      <EventList>
                        {day.events.map((event, index) =>
                          <Event key={index} event={event}/>,
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
