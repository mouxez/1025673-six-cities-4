import React from 'react';
import PropTypes from 'prop-types';
import OfferCard from '../offer-card/offer-card';
import {offerType} from '../../types/offer';

class OffersList extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeCard: {},
    };
    this.handleOnCardMouseEnter = this._handleOnCardMouseEnter.bind(this);
    this.handleOnCardMouseLeave = this._handleOnCardMouseLeave.bind(this);
  }
  _handleOnCardMouseEnter(card) {
    this.setState({activeCard: card});
  }
  _handleOnCardMouseLeave() {
    this.setState({activeCard: {}});
  }
  render() {
    const {offers} = this.props;
    return (
      <div className="cities__places-list places__list tabs__content">
        {offers.map((offer) => {
          return (
            <OfferCard
              offer={offer}
              onMouseEnter={this.handleOnCardMouseEnter}
              onMouseLeave={this.handleOnCardMouseLeave}
              key={offer.id}
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
};

export default OffersList;