import React from 'react';
import PropTypes from 'prop-types';
import CitiesPlaceCard from '../cities-place-card/cities-place-card';
import {offerType} from '../../types/offer';

class CitiesPlacesList extends React.PureComponent {
  constructor(props) {
    super(props);

  }
  render() {
    const {offers, onPlaceCardTitleClick, onPlaceCardMouseEnter} = this.props;
    return (
      <div className="cities__places-list places__list tabs__content">
        {offers.map((offer) => {
          return (
            <CitiesPlaceCard
              offer={offer}
              onPlaceCardMouseEnter={onPlaceCardMouseEnter}
              key={offer.id}
              onPlaceCardTitleClick={onPlaceCardTitleClick}
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
};

export default CitiesPlacesList;
