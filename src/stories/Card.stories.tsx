import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Card, { CardList } from 'components/Card/web';

// tslint:disable-next-line
const text = 'Qui dolorum dolore illum eos laudantium nobis. Et hic similique numquam voluptatem aut inventore maiores. Harum impedit qui nulla eos aut natus.';

storiesOf('Card', module)
  .add('basic', () => (<Card>{text}</Card>))
  .add('with image', () => (
    // tslint:disable
    <Card image="https://via.placeholder.com/400" imagePreview="http://via.placeholder.com/400?text=Loading...">
      {text}
    </Card>
  ))
  .add('clickable', () => (
    <Card image="https://via.placeholder.com/400" imagePreview="http://via.placeholder.com/400?text=Loading..." onClick={action('card clicked')}>
      {text}
    </Card>
  ))
  .add('href', () => (
    <Card image="https://via.placeholder.com/400" imagePreview="http://via.placeholder.com/400?text=Loading..." href="#" >
      {text}
    </Card>
  ))
  .add('with footer', () => (
    <Card image="https://via.placeholder.com/400" imagePreview="http://via.placeholder.com/400?text=Loading..." footer="Est occaecati expedita ea.">
      {text}
    </Card>
  ))
  .add('list', () => {
    const card = (index: number) => (
      <Card key={index} image="https://via.placeholder.com/400" imagePreview="http://via.placeholder.com/400?text=Loading..." href="#">
        {text}
      </Card>
    );
    // tslint:enable
    return (
      <CardList>
        {Array(9).fill('').map((_, index) => card(index))}
      </CardList>
    );
  });
