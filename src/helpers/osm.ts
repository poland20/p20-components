import { VenueLocation } from 'types/Venue';

function locationString(name: string, location: VenueLocation) {
  const { street1, street2, suburb, postcode } = location;
  const arr = [name, street1, street2, suburb, postcode];
  return arr.filter(notEmpty).join(', ');
}

export const mapsUrl = (name: string, location: VenueLocation) =>
  `https://openstreetmap.org/search?query=${encodeURI(locationString(name, location))}`;

function notEmpty(s?: string) {
  return s != null && s.length > 0;
}
