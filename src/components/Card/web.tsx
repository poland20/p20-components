import * as React from 'react';
import styled, { css } from 'react-emotion';
import { colors, breakpointMin } from 'components/variables';
import { rhythm } from 'components/typography';
import LazyImage from 'components/LazyImage/web';

const borderStyle = '1px solid rgba(1, 1, 1, 0.12)';
const shadowStyle = '0 1px 2px 0 rgba(1, 1, 1, 0.05)';

interface Props {
  clickable: boolean;
}

const CardContainer = styled('li')(
  {
    display: 'flex',
    flexDirection: 'column',
    // make the card occupy full allocated space
    width: '100%',
    height: '100%',
    // ...within an arbitrary maximum size
    maxWidth: `${rhythm(16)}`,
    overflow: 'hidden',
    // styling
    border: borderStyle,
    boxShadow: shadowStyle,
    transition: 'box-shadow 200ms ease-in-out',
    backgroundColor: `${colors.white}`,
  },
  (props: Props) => (props.clickable ? {
    ':hover': {
      boxShadow: '0 2px 12px 1px rgba(0, 0, 0, 0.13)',
    },
  } : null),
);

const CardContent = styled('div')({
  flex: '1 0 0',
  padding: `${rhythm(1)} 1rem`,
  width: '100%'
});

const CardFooter = styled('footer')({
  flex: '0 1',
  padding: `${rhythm(0.5)} 1rem`,
  borderTop: borderStyle,
  textAlign: 'center'
});

const container = css({
  flex: '0 1',
  display: 'flex',
  flexDirection: 'column',
});

const CardLink = styled('a')(
  container,
  {
    textDecoration: 'inherit',
    color: 'inherit',
  }
);

const CardClickable = styled('button')(
  container,
  {
    cursor: 'pointer',
    appearance: 'none',
    WebkitAppearance: 'none',
    padding: 0,
    border: 'none',
    color: 'inherit',
    outline: 'none',
    backgroundColor: 'transparent'
  }
);

export const CardList = styled('ol')({
  listStyle: 'none',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  padding: 0,
  margin: 0,
  '& > li': {
    flex: '0 0 100%',
    margin: `0 ${rhythm(0.33)} ${rhythm(1)}`,
    flexBasis: '50%',
    [breakpointMin('tablet')]: {
      flexBasis: '25%'
    }
  }
});

const renderCardContent = (content: React.ReactNode, href?: string, onClick?: () => void) => {
  if (href) {
    return <CardLink href={href}>{content}</CardLink>;
  }
  if (onClick) {
    return <CardClickable onClick={onClick}>{content}</CardClickable>;
  }
  return content;
};

interface CardProps {
  children?: React.ReactNode;
  footer?: React.ReactNode;
  image?: string;
  imagePreview?: string;
  onClick?: () => void;
  href?: string;
}

const Card: React.StatelessComponent<CardProps> = ({
  children, footer, image, imagePreview, onClick, href,
}) => {
  const content = (
    <React.Fragment>
      {image && imagePreview && <LazyImage src={image} placeholder={imagePreview}/>}
      <CardContent>
        {children}
      </CardContent>
    </React.Fragment>
  );

  return (
    <CardContainer clickable={!!onClick || !!href}>
      {renderCardContent(content, href, onClick)}
      {footer && <CardFooter>{footer}</CardFooter>}
    </CardContainer>
  );
};

export default Card;
