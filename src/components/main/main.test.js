import React from 'react';
import renderer from 'react-test-renderer';
import {offers} from '../../test-data/offers';
import {cities} from '../../test-data/cities';
import Main from './main';

test(`Main should render correctly`, () => {
  const tree = renderer.create(
      <Main
        offers={offers}
        activeCityName={Object.keys(cities[0])[1]}
        onPlaceCardTitleClick={jest.fn()}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
