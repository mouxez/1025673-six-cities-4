import React from 'react';
import renderer from 'react-test-renderer';
import CitiesPlaceCard from './cities-place-card';
import {offers} from '../../test-data/offers';

test(`CitiesPlaceCard should render correctly`, () => {
  const tree = renderer.create(
      <CitiesPlaceCard
        offer={offers[0]}
        onPlaceCardMouseEnter={jest.fn()}
        index={1}
        onOfferTitleClick={jest.fn()}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
