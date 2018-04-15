// @flow

import * as React from 'react';
import glamorous from 'glamorous';
import { colors } from '../variables';
import typography from '../typography';

const { rhythm } = typography;

const borderStyle = '1px solid rgba(1, 1, 1, 0.12)';
const shadowStyle = '0 1px 2px 0 rgba(1, 1, 1, 0.05)';

const CardContainer = glamorous.div({
  display: 'flex',
  flexDirection: 'column',
  // make the card occupy full allocated space
  width: '100%',
  height: '100%',
  // ...within an arbitrary maximum size
  maxWidth: rhythm(10),
  overflow: 'hidden',

  // styling
  border: borderStyle,
  boxShadow: shadowStyle,
  transition: 'box-shadow 200ms ease-in-out',
  backgroundColor: colors.white,
}, ({
  clickable = false,
}) => (clickable ? {
  ':hover': {
    boxShadow: '0 2px 12px 1px rgba(0, 0, 0, 0.13)',
  },
} : null));

const CardImage = glamorous.img({
  width: '100%',
  height: 'auto',
  margin: 0,
});

const CardContent = glamorous.div({
  flex: '1 0 0',
  padding: `${rhythm(1)} 16px`,
});

const CardFooter = glamorous.footer({
  flex: '0 1',
  padding: `${rhythm(0.5)} 16px`,
  borderTop: borderStyle,
});

const containerStyle = {
  flex: '0 1',
  display: 'flex',
  flexDirection: 'column',
};

const CardLink = glamorous.a({
  ...containerStyle,
  textDecoration: 'inherit',
  color: 'inherit',
});

const CardClickable = glamorous.button({
  ...containerStyle,
  cursor: 'pointer',
  appearance: 'none',
  WebkitAppearance: 'none',
  padding: 0,
  border: 'none',
  color: 'inherit',
  backgroundColor: 'transparent',
});

const renderCardContent = (content: React.Node, href?: string, onClick?: () => void) => {
  if (href) {
    return <CardLink href={href}>{content}</CardLink>;
  } else if (onClick) {
    return <CardClickable onClick={onClick}>{content}</CardClickable>;
  }
  return content;
};

interface CardProps {
  children?: React.Node;
  footer?: React.Node;
  image?: string;
  onClick?: () => void;
  href?: string;
}

const Card: React.StatelessFunctionalComponent<CardProps> = ({
  children, footer, image, onClick, href,
}) => {
  const content = (
    <React.Fragment>
      <CardImage src={image} />
      <CardContent>
        {children}
      </CardContent>
    </React.Fragment>
  );

  return (
    <CardContainer clickable={!!onClick || !!href}>
      {renderCardContent(content, href, onClick)}
      {footer == null ? null : <CardFooter>{footer}</CardFooter>}
    </CardContainer>
  );
};

export default Card;
