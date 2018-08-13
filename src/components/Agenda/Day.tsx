import styled from 'react-emotion';
import typography from 'components/typography';
import { breakpoint, colors } from '../variables';
const { rhythm } = typography;

export const DayList = styled('ol')({
  listStyle: 'none',
  margin: 0,
  padding: `0 0 ${rhythm(1)}`,
  '&:empty': {
    display: 'none',
  },
});

export const DayItem = styled('li')({
  marginBottom: rhythm(1),
  h3: {
    marginTop: 0,
  },
});

const ornamentSize = rhythm(0.75);
export const Description = styled('header')({
  position: 'relative',
  margin: `0 0 ${rhythm(1)} 0`,
  padding: `0 ${rhythm(1)} 0 ${rhythm(1)}`,
  [breakpoint('tablet')]: {
    marginLeft: [rhythm(0.75)],
  },
  // circular ornament on the timeline
  '&::before': {
    content: '""',
    position: 'absolute',
    width: [ornamentSize],
    height: [ornamentSize],
    backgroundColor: `${colors.primary}`,
    borderRadius: '50%',
    marginLeft: 0,
    top: rhythm(0.1),
    left: `-${rhythm(0.55)}`,
  },
});
