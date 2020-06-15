import React from 'react';
import renderer from 'react-test-renderer';
import OfferCard from './offer-card';
import {offers} from '../../mock/offers';


test(`OfferCard should render correctly`, () => {
  const tree = renderer.create(<OfferCard offer={offers[0]}/>).toJSON();

  expect(tree).toMatchSnapshot();
});
