import * as React from 'react';
import styled, { css } from 'react-emotion';

import { thin, rhythm } from 'components/typography';
import { breakpointMin } from 'components/variables';
import { EventSpeaker } from 'types/Agenda';
import LazyImage from 'components/LazyImage/web';
import { fill } from 'helpers/cloudinary';

const Avatar = styled('div')({
  flex: 'none',
  display: 'inline-block',
  width: rhythm(3),
  height: rhythm(3),
  verticalAlign: 'middle',
  borderRadius: '50%',
  zIndex: 1,
  img: {
    borderRadius: '50%'
  }
});

const Name = styled('span')(
  {
    display: 'inline-block',
    marginLeft: rhythm(0.5)
  },
  thin
);

export const SpeakerList = styled('ul')({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  listStyle: 'none',
  margin: 0,
  padding: 0,
  flex: '1 0',
  alignItems: 'flex-start'
});

const itemStyle = css({
  display: 'flex',
  alignItems: 'center',
  marginBottom: `${rhythm(1)} !important`,
  flex: '1 0 100%',
  [breakpointMin('tablet')]: {
    flexBasis: '33%'
  }
});

export const SpeakerItem: React.StatelessComponent<EventSpeaker> = ({ name, photo }) => (
  <li className={itemStyle}>
    <Avatar>
      <LazyImage
        src={fill(photo.secure_url, 120, 120, { gravity: 'face' })}
        placeholder={fill(photo.secure_url, 32, 32, { gravity: 'face' })}
      />
    </Avatar>
    <Name><h3>{name}</h3></Name>
  </li>
);
