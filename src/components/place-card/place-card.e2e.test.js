import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PlaceCard from './place-card';
import {offers} from '../../test-data/offers';

Enzyme.configure({
  adapter: new Adapter(),
});

const mockEvent = {
  preventDefault() {},
};
describe(`PlaceCard e2e test`, () => {
  test(`PlaceCard should pass offer data to event handler during onPlaceCardMouseEnter event`, () => {
    const onPlaceCardMouseEnter = jest.fn();

    const placeCard = shallow(
        <PlaceCard
          offer={offers[0]}
          onPlaceCardMouseEnter={onPlaceCardMouseEnter}
          index={1}
          onPlaceCardTitleClick={jest.fn()}
        />
    );

    const activeOffer = placeCard.find(`.place-card`);
    activeOffer.simulate(`mouseenter`, {});

    expect(onPlaceCardMouseEnter.mock.calls[0][0]).toMatchObject(offers[0]);
  });
  test(`should render Property component on title click`, () => {
    const OfferTitleClick = jest.fn();

    const offerIndex = 1;

    const placeCard = shallow(
        <PlaceCard
          offer={offers[0]}
          onPlaceCardMouseEnter={jest.fn()}
          index={offerIndex}
          onPlaceCardTitleClick={OfferTitleClick}
        />
    );

    const offerTitle = placeCard.find(`.place-card__name a`);
    offerTitle.simulate(`click`, mockEvent);

    expect(OfferTitleClick.mock.calls.length).toBe(offerIndex);
  });
});
