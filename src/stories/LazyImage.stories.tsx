import * as React from 'react';
import { storiesOf } from '@storybook/react';
import LazyImage from '../components/LazyImage/web';
import { action } from '@storybook/addon-actions';

storiesOf('LazyImage', module)
  // set position to 'relative' to override 'absolute'
  .add('default view', () => {
    const log = action('Visible');

    return (
      <div style={{ paddingTop: '100vh' }}>
        <LazyImage src="http://via.placeholder.com/400x400" onRender={log}/>
        <br/>
        <LazyImage src="http://via.placeholder.com/400x400" onRender={log}/>
        <br/>
        <LazyImage src="http://via.placeholder.com/400x400" onRender={log}/>
        <br/>
        <LazyImage src="http://via.placeholder.com/400x400" onRender={log}/>
        <br/>
        <LazyImage src="http://via.placeholder.com/400x400" onRender={log}/>
      </div>
    );
  });
