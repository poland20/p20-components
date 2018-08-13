import * as React from 'react';
import styled, { css } from 'react-emotion';
import * as moment from 'moment';

import typography, { bold } from 'components/typography';
import { breakpoint, colors, featherShadow } from '../variables';
import { EventType } from 'types/Agenda';
import { LinkIcon } from 'components/icons';
const { rhythm } = typography;

export const EventList = styled('ol')({
  listStyle: 'none',
  padding: 0,
  marginBottom: rhythm(1),
  marginLeft: 0,
});

const Content = styled('div')({
  paddingRight: rhythm(1),
  paddingLeft: rhythm(1),
  [breakpoint('tablet')]: {
    paddingLeft: rhythm(1.8),
  },
});

const Dash = styled('div')((props: { color?: string }) => ({
  position: 'absolute',
  left: 0,
  [breakpoint('tablet')]: {
    left: rhythm(0.5),
  },
  top: rhythm(0.45),
  height: '4px',
  width: rhythm(0.75),
  backgroundColor: props.color ? props.color : `${colors.primary}`,
}));

const Line = styled('div')((props: { color?: string }) => ({
  zIndex: 1,
  position: 'absolute',
  top: 0,
  height: '100%',
  left: '-2px',
  [breakpoint('tablet')]: {
    left: rhythm(0.5),
  },
  width: '4px',
  backgroundColor: props.color && props.color,
}));

const Main = styled('section')(
  {
    marginBottom: 0,
    position: 'relative',
    backgroundColor: `${colors.white}`,
    border: `1px solid rgba(1, 1, 1, 0.12)`,
    transition: 'boxShadow 200ms ease-in-out',
    '&:hover': {
      boxShadow: '0 1px 12px 1px rgba(0, 0, 0, 0.18)',
    },
  },
  featherShadow,
);

const Permalink = styled('a')({
  zIndex: 1,
  position: 'absolute',
  top: rhythm(1),
  right: rhythm(1),
  overflow: 'hidden',
  color: `${colors.mediumGray}`,
  '& > *': {
    display: 'inline-block',
  },
});

const TimeAndType = styled('div')(
  {
    display: 'flex',
    color: `${colors.darkGray}`,
  },
);

const Wrapper = styled('li')({
  padding: `1rem 0`,
  position: 'relative',
});

const permalinkIcon = css({
  zIndex: 1,
  transform: 'translateX(0)',
  margin: 0,
  marginLeft: rhythm(0.25),
  verticalAlign: 'middle',
});

const Duration: React.StatelessComponent<{ startDate?: Date, endDate?: Date }> =
  ({ startDate, endDate }) => {
    const startTime = moment.utc(startDate).format('HH:mm');
    const endTime = moment.utc(endDate).format('HH:mm');

    if (startDate && endDate) {
      return (
        <div className={bold}>
          <time dateTime={startDate.toISOString()}>{startTime}</time>
          <span>-</span>
          <time dateTime={endDate.toISOString()}>{endTime}</time>
        </div>
      );
    }
    if (startDate) {
      return (
        <div className={bold}>
          <time dateTime={startDate.toISOString()}>{startTime}</time>
          <span>-</span>
          <span>onwards</span>
        </div>
      );
    }
    if (endDate) {
      return (
        <div className={bold}>
          <span>Until </span>
          <time dateTime={endDate.toISOString()}>{endTime}</time>
        </div>
      );
    }

    return <div/>;
  };

export const Event: React.StatelessComponent<{ event: EventType }> = ({ event }) => {
  const categoryColor = event.category && event.category.color;
  const eventSlug = `event-${event.slug}`;

  return (
    <Wrapper>
      <Line color={categoryColor}/>
      <Main id={eventSlug}>
        <Dash color={categoryColor}/>
        <Permalink href={`#${eventSlug}`} title="Link to this event">
          <LinkIcon className={permalinkIcon}/>
        </Permalink>
        <Content>
          <header>
            <TimeAndType>
              {event.time && <Duration startDate={event.time.start} endDate={event.time.end}/>}
              <div style={{ marginLeft: rhythm(0.5) }}>{event.type}</div>
            </TimeAndType>
          </header>
        </Content>
      </Main>
    </Wrapper>
  );
};
