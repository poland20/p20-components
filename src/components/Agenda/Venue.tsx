import * as React from 'react';
import styled from 'react-emotion';
import { breakpoint, colors } from '../variables';
import { rhythm, bold } from '../typography';
import { EventVenue } from 'types/Agenda';
import { MapIcon } from '../icons';
import { mapsUrl } from 'helpers/osm';

const Wrapper = styled('section')({
  [breakpoint('mobile')]: {
    flex: '0 1 33%'
  },
  marginBottom: rhythm(1),
  p: {
    margin: 0
  }
});

const MapLink = styled('a')({
  color: `${colors.primary}`,
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none'
});

const Header = styled('header')(
  {
    color: `${colors.darkGray}`
  },
  bold
);

export const Venue: React.StatelessComponent<{ venue: EventVenue }> = ({ venue }) => (
  <Wrapper>
    <Header>Venue</Header>
    {!venue.location
    ?
      <p>{venue.name}</p>
    :
      <React.Fragment>
        <p>{venue.name}</p>
        {venue.location.street1 && <p>{venue.location.street1}</p>}
        {venue.location.street2 && <p>{venue.location.street2}</p>}
        {venue.location.suburb &&
          <p>
            {venue.location.suburb}, {venue.location.postcode && venue.location.postcode}
          </p>
        }
        <MapLink href={mapsUrl(venue.name, venue.location)} target="_blank">
          <i><MapIcon/>&ensp;</i>
          <span>View on the map</span>
        </MapLink>
      </React.Fragment>
    }
  </Wrapper>
);
