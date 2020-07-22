import React from 'react';
import PropTypes from 'prop-types';
import {offerType} from '../../types/offer';

import PlaceCard from '../place-card/place-card';

class PlacesList extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeOffer: null
    };
    this.handlePlaceCardMouseEnter = this.handlePlaceCardMouseEnter.bind(this);
  }
  handlePlaceCardMouseEnter(activeCard) {
    this.setState({
      activeOffer: activeCard
    });
  }

  render() {
    const {offers, onPlaceCardTitleClick, isNearPlacesCard} = this.props;
    const placesClassName = `places__list ${isNearPlacesCard ? `near-places__list` : `cities__places-list tabs__content`}`;
    return (
      <div className={placesClassName}>
        {offers.map((offer) => {
          return (
            <PlaceCard
              key={offer.id}
              offer={offer}
              onPlaceCardTitleClick={onPlaceCardTitleClick}
              isNearPlacesCard={isNearPlacesCard}
              onPlaceCardMouseEnter={this.handlePlaceCardMouseEnter}
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
  isNearPlacesCard: PropTypes.bool,
};

export default PlacesList;
