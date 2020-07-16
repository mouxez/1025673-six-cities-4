import React from 'react';
import renderer from 'react-test-renderer';
import {offers} from '../../test-data/offers';

import PlaceCard from './place-card';

test(`PlaceCard should render correctly`, () => {
  const tree = renderer.create(
      <PlaceCard
        offer={offers[0]}
        onPlaceCardMouseEnter={jest.fn()}
        onPlaceCardTitleClick={jest.fn()}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
