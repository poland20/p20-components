import React from 'react';
import styled, { css } from 'react-emotion';

// const style = css({
//   position: 'relative',
//   overflow: 'hidden',
// });

interface Props {
  source: string;
  placeholder?: string;
  aspectRatio: number;
  method: 'scroll' | 'immediate';
}

interface SpacerProps {
  ratio: number;
}

const Spacer = styled('div')((props: SpacerProps) => ({
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

export default class LazyImage extends React.Component<Props> {
  render() {
    return (
      <React.Fragment>
        <Spacer ratio={this.props.aspectRatio}/>
        {this.props.placeholder ?
        <Preview src={this.props.placeholder} role="presentation" aria-hidden={true}/> : null
        }
      </React.Fragment>
    );
  }
}
