import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Modal from 'components/Modal/web';
import Card from 'components/Card/web';
import Button from 'components/Button/web';

storiesOf('Modal', module)
  .add('default view', () => (
    <React.Fragment>
      <Modal trigger={<Button>Click me</Button>} label="storybook">
        <Card>Hello World</Card>
      </Modal>
    </React.Fragment>
  ));
