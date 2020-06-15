import React from 'react';
import renderer from 'react-test-renderer';
import App from './app';
import {offers} from '../../mock/offers';

test(`App should render correctly`, () => {
  const tree = renderer.create(<App offers={offers} />).toJSON();

  expect(tree).toMatchSnapshot();
});
