import React from 'react';
import renderer from 'react-test-renderer';
import Property from './property';
import {offers} from '../../test-data/offers';

test(`Property should render correctly`, () => {
  const tree = renderer.create(
      <Property
        offer={offers[0]}
        onPlaceCardTitleClick={jest.fn()}
        onPlaceCardMouseEnter={jest.fn()}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
