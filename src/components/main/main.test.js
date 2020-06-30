import React from 'react';
import renderer from 'react-test-renderer';
import Main from './main';
import {offers} from '../../test-data/offers';

test(`Main should render correctly`, () => {
  const tree = renderer.create(<Main offers={offers} onOfferTitleClick={jest.fn()} />).toJSON();

  expect(tree).toMatchSnapshot();
});
