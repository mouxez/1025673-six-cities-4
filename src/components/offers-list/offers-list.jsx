import React from 'react';
import PropTypes from 'prop-types';
import OfferCard from '../offer-card/offer-card';
import {offerType} from '../../types/offer';

class OffersList extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeCard: null,
    };
    this.handleOnCardMouseEnter = this._handleOnCardMouseEnter.bind(this);
  }
  _handleOnCardMouseEnter(offer) {
    this.setState({activeCard: offer});
  }
  render() {
    const {offers, onOfferTitleClick} = this.props;
    return (
      <div className="cities__places-list places__list tabs__content">
        {offers.map((offer) => {
          return (
            <OfferCard
              offer={offer}
              onMouseEnter={this.handleOnCardMouseEnter}
              key={offer.id}
              onOfferTitleClick={onOfferTitleClick}
            />
          );
        })}
      </div>
    );
  }
}

OffersList.propTypes = {
  offers: PropTypes.arrayOf(
      offerType.isRequired
  ).isRequired,
  onOfferTitleClick: PropTypes.func.isRequired,
};

export default OffersList;
