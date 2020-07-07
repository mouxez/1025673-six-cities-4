import React from 'react';
import PropTypes from 'prop-types';
import PlaceCard from '../place-card/place-card';
import {offerType} from '../../types/offer';

const PlacesList = ({offers, onPlaceCardTitleClick, onPlaceCardMouseEnter, isNearPlacesCard}) => {
  const placesClassName = `places__list ${isNearPlacesCard ? `near-places__list` : `cities__places-list tabs__content`}`;
  return (
    <div className={placesClassName}>
      {offers.map((offer) => {
        return (
          <PlaceCard
            key={offer.id}
            offer={offer}
            onPlaceCardMouseEnter={onPlaceCardMouseEnter}
            onPlaceCardTitleClick={onPlaceCardTitleClick}
            isNearPlacesCard={isNearPlacesCard}
          />
        );
      })}
    </div>
  );
};

PlacesList.propTypes = {
  offers: PropTypes.arrayOf(
      offerType.isRequired
  ).isRequired,
  onPlaceCardTitleClick: PropTypes.func.isRequired,
  onPlaceCardMouseEnter: PropTypes.func.isRequired,
  isNearPlacesCard: PropTypes.bool,
};

export default PlacesList;
