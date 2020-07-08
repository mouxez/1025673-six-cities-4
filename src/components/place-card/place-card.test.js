import React from 'react';
import renderer from 'react-test-renderer';
import PlaceCard from './place-card';
import {offers} from '../../test-data/offers';

test(`PlaceCard should render correctly`, () => {
  const tree = renderer.create(
      <PlaceCard
        offer={offers[0]}
        onPlaceCardMouseEnter={jest.fn()}
        index={1}
        onPlaceCardTitleClick={jest.fn()}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
