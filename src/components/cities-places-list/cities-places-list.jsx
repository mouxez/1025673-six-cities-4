import React from 'react';
import PropTypes from 'prop-types';
import CitiesPlaceCard from '../cities-place-card/cities-place-card';
import {offerType} from '../../types/offer';

class CitiesPlacesList extends React.PureComponent {
  constructor(props) {
    super(props);

  }
  render() {
    const {offers, onOfferTitleClick, onMouseEnter} = this.props;
    return (
      <div className="cities__places-list places__list tabs__content">
        {offers.map((offer) => {
          return (
            <CitiesPlaceCard
              offer={offer}
              onMouseEnter={onMouseEnter}
              key={offer.id}
              onOfferTitleClick={onOfferTitleClick}
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
  onOfferTitleClick: PropTypes.func.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
};

export default CitiesPlacesList;
