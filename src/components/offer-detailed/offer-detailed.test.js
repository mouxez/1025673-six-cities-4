import React from 'react';
import renderer from 'react-test-renderer';
import OfferDetailed from './offer-detailed';
import {offers} from '../../mock/offers';

test(`OfferDetailed should render correctly`, () => {
  const tree = renderer.create(
      <OfferDetailed
        offer={offers[0]}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
