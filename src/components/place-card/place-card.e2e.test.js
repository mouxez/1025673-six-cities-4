import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {offers} from '../../test-data/offers';

import PlaceCard from './place-card';

Enzyme.configure({
  adapter: new Adapter(),
});

const mockEvent = {
  preventDefault() {},
};

const onPlaceCardTitleClick = jest.fn();
const onPlaceCardMouseEnter = jest.fn();

describe(`PlaceCard e2e test`, () => {
  const placeCard = Enzyme.shallow(
      <PlaceCard
        offer={offers[0]}
        onPlaceCardMouseEnter={jest.fn()}
        onPlaceCardTitleClick={jest.fn()}
      />
  );

  test(`PlaceCard should pass offer data to event handler during onPlaceCardMouseEnter event`, () => {

    const currentOffer = placeCard.find(`.place-card`);
    currentOffer.simulate(`mouseenter`, {});

    expect(onPlaceCardMouseEnter.mock.calls[0][0]).toMatchObject(offers[0]);
  });
  test(`should render Property component on title click`, () => {

    const offerTitle = placeCard.find(`.place-card__name a`);
    offerTitle.simulate(`click`, mockEvent);

    expect(onPlaceCardTitleClick).toHaveBeenCalledTimes(1);
  });
});
