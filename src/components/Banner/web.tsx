import * as React from 'react';

import Swiper from 'react-id-swiper';
import 'react-id-swiper/src/styles/css/swiper.css';

import styled, { css, injectGlobal } from 'react-emotion';
import { colors, breakpoint } from 'components/variables';
import { rhythm, fat } from 'components/typography';
import { Edition } from 'types/Edition';
import walden from 'components/Banner/walden';
import { imgLimit } from 'helpers/cloudinary';

const angledEdge = css({
  position: 'relative',
  transform: 'translate(0, 0)',
  zIndex: 2,
  '&::after': {
    content: '""',
    zIndex: -1,
    background: 'inherit',
    position: 'absolute',
    display: 'block',
    width: '100%',
    height: '100%',
    backfaceVisibility: 'hidden',
    top: 0,
    transform: `skewY(-5deg)`,
    transformOrigin: 'top right',
    [breakpoint('tablet')]: {
      transform: `skewX(-10deg)`,
      transformOrigin: 'bottom right'
    }
  },
});

const column = css({
  backgroundColor: `${colors.white}`,
  flex: '1 0 50%',
  position: 'relative'
});

const Carousel = styled('div')(column, {
  minHeight: rhythm(9),
  [breakpoint('tablet')]: {
    minHeight: 0
  }
});

const Content = styled('div')(column, angledEdge, {
  paddingBottom: rhythm(0.5),
  [breakpoint('tablet')]: {
    padding: `${rhythm(1)} 0 ${rhythm(0)} ${rhythm(1)}`
  }
});

const DatePlace = styled('h3')(fat, {
  color: `${colors.darkGray}`,
  margin: `0 0 ${rhythm(1)}`,
  display: 'flex',
  flexDirection: 'column',
  '& > *': {
    flex: 'none'
  },
  [breakpoint('tablet')]: {
    flexDirection: 'row'
  }
});

const Header = styled('header')({
  textAlign: 'center',
  [breakpoint('tablet')]: {
    textAlign: 'initial'
  }
});

const Image = styled('div')(walden, (props: { src: string }) => ({
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundOrigin: 'content-box',
  backgroundClip: 'content-box',
  backgroundPosition: 'center center',
  backgroundImage: `url(${props.src})`
}));

const Separator = styled('span')({
  position: 'relative',
  padding: `${rhythm(0.5)} 0`,
  [breakpoint('tablet')]: {
    padding: `0 ${rhythm(0.5)}`,
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: `${rhythm(0.5)}`,
    left: '50%',
    transform: 'translateX(-50%)',
    backgroundColor: `${colors.mediumGray}`,
    width: '33%',
    height: 1,
    [breakpoint('tablet')]: {
      height: rhythm(1),
      top: 0,
      bottom: 0,
      left: 'initial',
      transform: 'initial',
      width: 1
    }
  }
});

const _Banner = styled('section')({
  backgroundColor: `${colors.white}`,
  zIndex: 4,
  overflowX: 'hidden',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  [breakpoint('tablet')]: {
    flexDirection: 'row',
    alignItems: 'stretch'
  }
});

const swiperProps = {
  loop: true,
  simulateTouch: false,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  speed: 500,
  pagination: {
    el: '.swiper-pagination'
  },
  a11y: {
    enabled: true
  },
};

// Swiper style
injectGlobal({
  '.swiper-container': {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
  '.swiper-pagination-bullet': {
    opacity: 1,
    backgroundColor: `${colors.white}`,
    boxShadow: '0px 1px 4px 0px rgba(0,0,0,0.4)',
    '&.swiper-pagination-bullet-active': {
      backgroundColor: `${colors.primary}`
    }
  }
});

interface Props {
  currentEdition?: Edition;
  description: string;
}

const Banner: React.StatelessComponent<Props> = ({ currentEdition, description }) => (
  <_Banner>
    <Content>
      <Header>
        <h1>Poland 2.0 Summit</h1>
        {currentEdition && (
          <DatePlace>
            <time dateTime={currentEdition.isoString}>{currentEdition.dateString}</time>
            <Separator/>
            <span>{currentEdition.venue.name}</span>
          </DatePlace>
        )}
      </Header>
      {description}
    </Content>
    <Carousel>
      <Swiper {...swiperProps}>
        {currentEdition && currentEdition.photos ?
          currentEdition.photos.map((photo, index) => (
            <Image className="swiper-slide" key={index} src={imgLimit(photo.secure_url, 900)}/>
          )) :
          ['ffoopf3pdr6xxft5pfel', 'tprdqpldylorpccqpmg0', 'DSC_0270n_rlkqba'] // default images
            .map((secure_url, index) => (
              <Image className="swiper-slide" key={index} src={imgLimit(secure_url, 900)}/>
            ))
        }
      </Swiper>
    </Carousel>
  </_Banner>
);

export default Banner;
