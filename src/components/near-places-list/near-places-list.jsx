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
    this.handleOfferTitleClick = this.handleOfferTitleClick.bind(this);
    this.handleCardMouseEnter = this.handleMouseEnter.bind(this);
  }

  handleOfferTitleClick(offer) {
    this.setState({activeOfferTitle: offer});
  }
  handleMouseEnter(offer) {
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
              onOfferTitleClick={this.handleOfferTitleClick}
              onMouseEnter={this.handleCardMouseEnter}
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
