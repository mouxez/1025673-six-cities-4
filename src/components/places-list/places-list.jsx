import React from 'react';
import PropTypes from 'prop-types';
import PlaceCard from '../place-card/place-card';
import {offerType} from '../../types/offer';

class PlacesList extends React.PureComponent {
  constructor(props) {
    super(props);

  }
  render() {
    const {offers, onPlaceCardTitleClick, onPlaceCardMouseEnter, isNearPlacesCard} = this.props;
    return (
      <div className={isNearPlacesCard ? `near-places__list places__list` : `cities__places-list places__list tabs__content`}>
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
  }
}

PlacesList.propTypes = {
  offers: PropTypes.arrayOf(
      offerType.isRequired
  ).isRequired,
  onPlaceCardTitleClick: PropTypes.func.isRequired,
  onPlaceCardMouseEnter: PropTypes.func.isRequired,
  isNearPlacesCard: PropTypes.bool,
};

export default PlacesList;
