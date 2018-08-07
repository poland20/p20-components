// Credits to https://github.com/MatejKustec/SpinThatShit

import styled, { keyframes } from 'react-emotion';
import { colors } from '../variables';

const loaderRotate = keyframes({
  '0%': {
    transform: 'rotate(0)',
  },
  '100%': {
    transform: 'rotate(360deg)',
  },
});

const props =  {
  size: '32px',
  color: colors.mediumGray,
  borderSize: '3px',
  duration: '1s',
};

const Spinner = styled('div')({
  width: props.size,
  height: props.size,
  border: `${props.borderSize} solid rgba(${props.color}, 0.25`,
  borderTopColor: `${props.color}`,
  borderRadius: '50%',
  position: 'absolute',
  animation: `${loaderRotate} ${props.duration} linear infinite`,
  top: '50%',
  margin: `${-props.size / 2} auto 0`,
  marginLeft: `${-props.size / 2}`,
});

export default Spinner;
