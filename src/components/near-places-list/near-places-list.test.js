import React from 'react';
import renderer from 'react-test-renderer';
import NearPlacesList from './near-places-list';
import {offers} from '../../test-data/offers';

test(`ReviewsItem should render correctly`, () => {
  const tree = renderer.create(
      <NearPlacesList
        offers={offers}
        onPlaceCardTitleClick={jest.fn()}
        onPlaceCardMouseEnter={jest.fn()}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
