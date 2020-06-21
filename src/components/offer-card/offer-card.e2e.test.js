import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import OfferCard from './offer-card.jsx';
import {offers} from '../../mock/offers';

Enzyme.configure({
  adapter: new Adapter(),
});

test(`OfferCard should pass offer data to event handler during onMouseEnter event`, () => {
  const onMouseEnter = jest.fn();

  const offerCard = shallow(
      <OfferCard
        offer={offers[0]}
        onMouseEnter={onMouseEnter}
        onMouseLeave={jest.fn()}
      />
  );

  const activeOffer = offerCard.find(`.place-card`);
  activeOffer.simulate(`mouseenter`, {});

  expect(onMouseEnter.mock.calls[0][0]).toMatchObject(offers[0]);
});
