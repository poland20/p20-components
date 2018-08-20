import * as React from 'react';
import { storiesOf } from '@storybook/react';
import AnimatedLogo from 'components/AnimatedLogo/web';

storiesOf('AnimatedLogo', module)
  .add('default view', () => (
    <AnimatedLogo/>)
  );
