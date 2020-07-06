import React from 'react';
import PropTypes from 'prop-types';
import NearPlacesCard from '../near-places-card/near-places-card';
import {offerType} from '../../types/offer';
import {offers} from '../../mock/offers';

class NearPlacesList extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeOfferTitle: null,
      activeOfferData: null,
    };
    this.handlePlaceCardTitleClick = this.handlePlaceCardTitleClick.bind(this);
    this.handleCardMouseEnter = this.handleCardMouseEnter.bind(this);
  }

  handlePlaceCardTitleClick(offer) {
    this.setState({activeOfferTitle: offer});
  }
  handleCardMouseEnter(offer) {
    this.setState({activeOfferData: offer});
  }

  render() {
    return (
      <div className="near-places__list places__list">
        {offers.slice(0, 3).map((offer) => {
          return (
            <NearPlacesCard
              key={offer.id}
              offer={offer}
              onPlaceCardTitleClick={this.handlePlaceCardTitleClick}
              onPlaceCardMouseEnter={this.handleCardMouseEnter}
            />);
        })}
      </div>
    );
  }
}

NearPlacesList.propTypes = {
  offers: PropTypes.arrayOf(
      offerType.isRequired
  ).isRequired,
};

export default NearPlacesList;
