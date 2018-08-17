import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Countdown from 'components/Countdown/web';

storiesOf('Countdown', module)
  .add('default view', () => (
    <Countdown date={new Date('2018-11-24')} />)
  );
