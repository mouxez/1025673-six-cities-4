import React from 'react';
import PropTypes from 'prop-types';
import CitiesPlaceCard from '../cities-place-card/cities-place-card';
import {offerType} from '../../types/offer';

class CitiesPlacesList extends React.PureComponent {
  constructor(props) {
    super(props);

  }
  render() {
    const {offers, onPlaceCardTitleClick, onPlaceCardMouseEnter, isNearPlacesCard} = this.props;
    return (
      <div className={isNearPlacesCard ? `near-places__list places__list` : `cities__places-list places__list tabs__content`}>
        {offers.map((offer) => {
          return (
            <CitiesPlaceCard
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

CitiesPlacesList.propTypes = {
  offers: PropTypes.arrayOf(
      offerType.isRequired
  ).isRequired,
  onPlaceCardTitleClick: PropTypes.func.isRequired,
  onPlaceCardMouseEnter: PropTypes.func.isRequired,
  isNearPlacesCard: PropTypes.bool,
};

export default CitiesPlacesList;
