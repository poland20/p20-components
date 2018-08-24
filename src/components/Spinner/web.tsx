// Credits to https://github.com/MatejKustec/SpinThatShit

import styled, { keyframes } from 'react-emotion';
import { colors } from '../variables';
import { rhythm } from 'components/typography';

const loaderRotate = keyframes({
  from: {
    transform: 'rotate(0)',
  },
  to: {
    transform: 'rotate(360deg)',
  },
});

const props =  {
  size: rhythm(1.5),
  color: colors.mediumGray,
  borderSize: '3px',
  duration: '1s',
};

const Spinner = styled('div')({
  width: props.size,
  height: props.size,
  border: `${props.borderSize} solid ${props.color.fade(0.75)}`,
  borderTopColor: `${props.color}`,
  borderRadius: '50%',
  position: 'absolute',
  animation: `${loaderRotate} ${props.duration} linear infinite`,
  zIndex: 2,
});

export default Spinner;
