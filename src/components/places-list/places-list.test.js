import React from 'react';
import renderer from 'react-test-renderer';
import {offers} from '../../test-data/offers';

import PlacesList from './places-list';

test(`PlacesList should render correctlt`, () => {
  const tree = renderer.create(
      <PlacesList
        offers={offers}
        onPlaceCardTitleClick={jest.fn()}
      />).toJSON();

  expect(tree).toMatchSnapshot();
});
