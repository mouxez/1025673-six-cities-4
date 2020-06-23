import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import OfferCard from './offer-card.jsx';
import {offers} from '../../mock/offers';

Enzyme.configure({
  adapter: new Adapter(),
});

const mockEvent = {
  preventDefault() {},
};
describe(`OfferCard e2e test`, () => {
  test(`OfferCard should pass offer data to event handler during onMouseEnter event`, () => {
    const onMouseEnter = jest.fn();

    const offerCard = shallow(
        <OfferCard
          offer={offers[0]}
          onMouseEnter={onMouseEnter}
          onMouseLeave={jest.fn()}
          index={1}
          onTitleClick={jest.fn()}
        />
    );

    const activeOffer = offerCard.find(`.place-card`);
    activeOffer.simulate(`mouseenter`, {});

    expect(onMouseEnter.mock.calls[0][0]).toMatchObject(offers[0]);
  });
  test(`should render OfferDetailed component on title click`, () => {
    const titleClick = jest.fn();

    const offerIndex = 1;

    const offerCard = shallow(
        <OfferCard
          offer={offers[0]}
          onMouseEnter={jest.fn()}
          onMouseLeave={jest.fn()}
          index={offerIndex}
          onTitleClick={titleClick}
        />
    );

    const offerTitle = offerCard.find(`.place-card__name a`);
    offerTitle.simulate(`click`, mockEvent);

    expect(titleClick.mock.calls.length).toBe(offerIndex);
  });
});
