import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Spinner from '../components/Spinner/web';

storiesOf('Spinner', module)
  .add('default', () => <Spinner/>);
