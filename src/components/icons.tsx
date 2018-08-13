import * as React from 'react';
require('./linear-icons-1.0.0.min.css');

interface Props {
  className: string;
}

export const LinkIcon: React.StatelessComponent<Props> = ({ className }) =>
  <span className={`${className} lnr lnr-link`}/>;
