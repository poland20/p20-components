import React from 'react';
import Renderer from 'react-test-renderer';
import Button from '.';

it('renders correctly', () => {
  const tree = Renderer.create(<Button>Click me</Button>);

  expect(tree.toJSON()).toMatchSnapshot();
});

it('renders hollow style correctly', () => {
  const tree = Renderer.create(<Button hollow>Click me</Button>);

  expect(tree.toJSON()).toMatchSnapshot();
});
