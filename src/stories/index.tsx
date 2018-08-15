import * as React from 'react';
import { TypographyStyle, GoogleFont } from 'react-typography';
import { addDecorator, configure } from '@storybook/react';
import { Cloudinary } from 'cloudinary-core';
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

export const cloudinary = Cloudinary.new({
  cloud_name: process.env.CLOUDINARY_NAME,
  secure: true
});

configure(loadStories, module);
