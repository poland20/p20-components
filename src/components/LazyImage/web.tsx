import * as React from 'react';
import styled, { css } from 'react-emotion';
import 'intersection-observer';
import Observer from '@researchgate/react-intersection-observer';
import Spinner from '../Spinner/web';

const Wrapper = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  overflow: 'hidden',
  width: 'inherit',
  height: 'inherit'
});

const style = css({
  margin: 0,
  willChange: 'opacity',
  transition: 'opacity 0.25s ease-in',
});

const preview = css({
  filter: 'blur(5px)',
});

interface Props {
  src: string;
  placeholder: string;
  onRender?: Function;
}

export default class LazyImage extends React.Component<Props> {
  element = React.createRef<HTMLImageElement>();

  state = {
    disabled: false,
  };

  handleIntersection = (entry: IntersectionObserverEntry) => {
    if (entry.isIntersecting) {
      const image = entry.target as HTMLImageElement;
      image.src = this.props.src;

      if (!this.state.disabled) {
        this.setState({ disabled: true }, () => {
          if (this.props.onRender) {
            this.props.onRender();
          }
        });
      }
    }
  }

  observerOptions = {
    onChange: this.handleIntersection,
    root: null,
    threshold: 0.25,
  };

  render() {
    return (
      <Wrapper>
        <Observer {...this.observerOptions} {...this.state.disabled}>
          <img
            src={this.props.placeholder}
            ref={this.element}
            className={`${style} ${!this.state.disabled && preview}`}
          />
        </Observer>
        {!this.state.disabled ? <Spinner/> : null}
      </Wrapper>
    );
  }
}
