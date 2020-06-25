import React from 'react';
import {offerType} from '../../types/offer';
import PropTypes from 'prop-types';

const OfferCard = ({offer, onMouseEnter, onMouseLeave, onOfferTitleClick, index}) => {

  const {isPremium, previewImage, price, isFavorite, title, rating, type} = offer;

  const handleOfferTitleClick = (count, evt) => {
    evt.preventDefault();
    onOfferTitleClick(count);
  };

  return (
    <article
      className="cities__place-card place-card"
      onMouseEnter={() => onMouseEnter(offer)}
      onMouseLeave={onMouseLeave}
    >
      {isPremium ? <div className="place-card__mark">
        <span>Premium</span>
      </div> : ``}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="/">
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="property image" />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              {isFavorite ? <use xlinkHref="#icon-bookmark"></use> : ``}
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: (Math.floor(rating) * 20 + `%`)}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="/" onClick={(evt) => handleOfferTitleClick(index, evt)}>{title}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

OfferCard.propTypes = {
  offer: offerType.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  onOfferTitleClick: PropTypes.func.isRequired,
};

export default OfferCard;
