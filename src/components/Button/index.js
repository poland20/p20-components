// @flow
import glamor from 'glamor';
import glamorous from 'glamorous';
import { colors } from '../variables';
import typography from '../typography';

const { rhythm } = typography;

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
      padding: `calc(${rhythm(0.5)} - 2px) calc(${rhythm(0.5)} - 2px)`,
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

const style = {
  WebkitAppearance: 'none',
  borderRadius: 1,
  display: 'inline-block',
  padding: `${rhythm(0.5)} ${rhythm(1)}`,
  margin: `${rhythm(0.5)} 0`,
  position: 'relative',
  textAlign: 'center',
  verticalAlign: 'middle',
  touchAction: 'manipulation',
  textDecoration: 'none',
  whiteSpace: 'nowrap',
  border: 'none',
  cursor: 'pointer',
  boxShadow: '0px 2px 7px 0px rgba(1, 1, 1, 0.18)',
};

export const Button = glamorous.button(style, ({
  kind = 'primary',
  hollow = false,
}) => theme(kind, hollow));

export const NavButton = glamorous.a(style, ({
  kind = 'primary',
  hollow = false,
}) => theme(kind, hollow));

export default Button;
