// @flow

import glamorous from 'glamorous';
import { colors, verticalBaseline } from '../variables';

const themes = {
  primary: {
    foreground: colors.white,
    background: colors.primary,
  },
};

function theme(themeName = 'primary', hollow = false) {
  const { foreground, background } = themes[themeName];
  if (hollow) {
    return {
      padding: `${0.5 * verticalBaseline - 2}px ${verticalBaseline - 2}px`,
      borderWidth: 2,
      borderStyle: 'solid',
      borderColor: background,
      color: background,
      backgroundColor: 'transparent',
      boxShadow: 'none',
    };
  }
  return {
    color: foreground,
    backgroundColor: background,
    ':hover': {
      backgroundColor: background.darken(0.1),
    },
  };
}

const Button = glamorous.button({
  WebkitAppearance: 'none',
  borderRadius: 1,
  display: 'inline-block',
  padding: `${0.5 * verticalBaseline}px ${verticalBaseline}px`,
  margin: `${0.5 * verticalBaseline}px 0`,
  position: 'relative',
  textAlign: 'center',
  verticalAlign: 'middle',
  touchAction: 'manipulation',
  whiteSpace: 'nowrap',
  border: 'none',
  cursor: 'pointer',
  boxShadow: '0px 2px 7px 0px rgba(1, 1, 1, 0.18)',
}, ({
  kind = 'primary',
  hollow = false,
}) => theme(kind, hollow));

export default Button;
