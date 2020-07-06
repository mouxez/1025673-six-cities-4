import React from 'react';
import renderer from 'react-test-renderer';
import OfferList from './cities-places-list';
import {offers} from '../../test-data/offers';

test(`OfferList should render correctlt`, () => {
  const tree = renderer.create(
      <OfferList offers={offers}
        onPlaceCardTitleClick={jest.fn()}
        onPlaceCardMouseEnter={jest.fn()}
      />).toJSON();

  expect(tree).toMatchSnapshot();
});
