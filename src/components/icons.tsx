import * as React from 'react';
import './linear-icons-1.0.0.min.css';

interface Props {
  className?: string;
}

const Icon = (iconName: string) => class extends React.Component<Props> {
  render() {
    return <span className={`${this.props.className} lnr lnr-${iconName}`}/>;
  }
};

export const CrossIcon = Icon('cross');
export const LinkIcon = Icon('link');
export const MapIcon = Icon('map');
