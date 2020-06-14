import React from 'react';
import PropTypes from "prop-types";
import {HOUSING_TYPES} from '../../data/constants';

const OfferCard = ({offer}) => {

  const {isPremium, imgSrc, imgDescription, price, isBookmarked, placeDescription, placeType} = offer;

  return (
    <article className="cities__place-card place-card">
      {isPremium ? <div className="place-card__mark">
        <span>Premium</span>
      </div> : ``}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="/">
          <img className="place-card__image" src={imgSrc} width="260" height="200" alt={imgDescription} />
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
              {isBookmarked ? <use xlinkHref="#icon-bookmark"></use> : ``}
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `80%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="/">{placeDescription}</a>
        </h2>
        <p className="place-card__type">{placeType}</p>
      </div>
    </article>
  );
};

OfferCard.propTypes = {
  offer: PropTypes.shape({
    isPremium: PropTypes.bool.isRequired,
    imgSrc: PropTypes.string.isRequired,
    imgDescription: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    isBookmarked: PropTypes.bool.isRequired,
    placeDescription: PropTypes.string.isRequired,
    placeType: PropTypes.oneOf(HOUSING_TYPES).isRequired,
  }).isRequired,
};

export default OfferCard;
