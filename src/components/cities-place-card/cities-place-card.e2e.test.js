import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CitiesPlaceCard from './cities-place-card.jsx';
import {offers} from '../../test-data/offers';

Enzyme.configure({
  adapter: new Adapter(),
});

const mockEvent = {
  preventDefault() {},
};
describe(`CitiesPlaceCard e2e test`, () => {
  test(`CitiesPlaceCard should pass offer data to event handler during onPlaceCardMouseEnter event`, () => {
    const onPlaceCardMouseEnter = jest.fn();

    const citiesPlaceCard = shallow(
        <CitiesPlaceCard
          offer={offers[0]}
          onPlaceCardMouseEnter={onPlaceCardMouseEnter}
          index={1}
          onOfferTitleClick={jest.fn()}
        />
    );

    const activeOffer = citiesPlaceCard.find(`.place-card`);
    activeOffer.simulate(`mouseenter`, {});

    expect(onPlaceCardMouseEnter.mock.calls[0][0]).toMatchObject(offers[0]);
  });
  test(`should render PageMainProperty component on title click`, () => {
    const OfferTitleClick = jest.fn();

    const offerIndex = 1;

    const citiesPlaceCard = shallow(
        <CitiesPlaceCard
          offer={offers[0]}
          onPlaceCardMouseEnter={jest.fn()}
          index={offerIndex}
          onOfferTitleClick={OfferTitleClick}
        />
    );

    const offerTitle = citiesPlaceCard.find(`.place-card__name a`);
    offerTitle.simulate(`click`, mockEvent);

    expect(OfferTitleClick.mock.calls.length).toBe(offerIndex);
  });
});
