import React from 'react';
import renderer from 'react-test-renderer';
import OfferCard from './offer-card';
import {offers} from '../../mock/offers';

test(`OfferCard should render correctly`, () => {
  const tree = renderer.create(
      <OfferCard
        offer={offers[0]}
        onMouseEnter={jest.fn()}
        onMouseLeave={jest.fn()}
        index={1}
        onOfferTitleClick={jest.fn()}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
