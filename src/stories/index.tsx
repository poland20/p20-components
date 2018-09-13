import * as React from 'react';
import { TypographyStyle, GoogleFont } from 'react-typography';
import { addDecorator, configure } from '@storybook/react';
import typography from 'components/typography';

import '../linear-icons-1.0.0.min.css';
import 'react-id-swiper/src/styles/css/swiper.css';

addDecorator(story => (
  <div style={{ margin: 16 }}>
    <TypographyStyle typography={typography} />
    <GoogleFont typography={typography} />
    {story()}
  </div>
));

const req = require.context('.', true, /\.stories\.tsx?$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
