import React from 'react';
import renderer from 'react-test-renderer';
import OfferList from '../offers-list/offers-list';
import {offers} from '../../mock/offers';

test(`OfferList should render correctlt`, () => {
  const tree = renderer.create(<OfferList offers={offers} onOfferTitleClick={jest.fn()} />).toJSON();

  expect(tree).toMatchSnapshot();
});
