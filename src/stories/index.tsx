import * as React from 'react';
import { TypographyStyle, GoogleFont } from 'react-typography';
import { addDecorator, configure } from '@storybook/react';
import typography from 'components/typography';

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
