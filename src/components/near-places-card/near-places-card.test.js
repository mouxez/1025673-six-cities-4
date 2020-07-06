import React from 'react';
import renderer from 'react-test-renderer';
import NearPlaceCard from './near-places-card';
import {offers} from '../../test-data/offers';

test(`ReviewsItem should render correctly`, () => {
  const tree = renderer.create(
      <NearPlaceCard
        offer={offers[0]}
        onPlaceCardTitleClick={jest.fn()}
        onPlaceCardMouseEnter={jest.fn()}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
