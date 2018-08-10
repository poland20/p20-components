import * as React from 'react';
import { css } from 'react-emotion';
import 'intersection-observer';

const style = css({
  position: 'relative',
  overflow: 'hidden',
});

interface Props {
  src: string;
  onRender?: Function;
}

export default class LazyImage extends React.Component<Props> {
  element = React.createRef<HTMLImageElement>();
  observer: IntersectionObserver;
  rendered = false;

  componentDidMount() {
    if (this.element.current) {
      const image = this.element.current;
      this.createObserver(image);
    }
  }

  createObserver = (element: HTMLImageElement) => {
    const options = {
      root: null,
      threshold: 0.25,
    };

    this.observer = new IntersectionObserver(this.callback, options);
    this.observer.observe(element);
  }

  callback = (entries: IntersectionObserverEntry[]) => {
    const entry = entries[0]; // there is only one element being observed
    if (entry.isIntersecting) {
      const image = entry.target as HTMLImageElement;
      image.src = this.props.src;
      if (!this.rendered) {
        // image.style.visibility = 'visible';
        this.rendered = true;
      }
      this.observer.unobserve(entry.target);

      if (this.props.onRender) {
        this.props.onRender();
      }
    }
  }

  render() {
    return <img ref={this.element} className={style}/>;
  }
}
