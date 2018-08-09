import React from 'react';
import styled, { css } from 'react-emotion';
import 'intersection-observer';
import Observer from '@researchgate/react-intersection-observer';

import Spinner from '../Spinner/web';

const Spacer = styled('div')((props: { ratio: number }) => ({
  paddingBottom: `${Math.ceil(1 / props.ratio * 100)}%`,
}));

const previewOriginalClass = css({
  position: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
  height: '100%',
  maxHeight: 'inherit',
  width: 'auto',
  maxWidth: '100%',
  opacity: 0,
  willChange: 'opacity',
  transition: 'opacity 0.25s ease-in',
});

const Preview = styled('img')(
  previewOriginalClass,
  {
    filter: 'blur(5px)',
  },
);

interface Props {
  source: string;
  placeholder?: string;
  aspectRatio: number;
  method: 'scroll' | 'immediate';
}

interface State {
  image?: HTMLImageElement;
  // isIntersecting: boolean;
}

export default class LazyImage extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  state: State = {
    image: undefined,
  };

  fetch = (href: string) {

  }

  handleIntersection = ({ isIntersecting }: { isIntersecting: boolean }) => {
    if (isIntersecting) {
      this.fetch(this.props.source);
    }
  }

  render() {
    const options = {
      onChange: this.handleIntersection,
      root: '.site-container',
    };

    return (
      <Observer {...options}>
        { this.state.image ?
        <React.Fragment>
          <Spacer ratio={this.props.aspectRatio}/>
          {this.props.placeholder ?
          <Preview src={this.props.placeholder} role="presentation" aria-hidden={true}/> : null
          }
          <Spinner/>
        </React.Fragment>
        : <React.Fragment/>
        }
      </Observer>
    );
  }
}
