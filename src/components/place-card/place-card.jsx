import React from 'react';
import {offerType} from '../../types/offer';
import PropTypes from 'prop-types';

const PlaceCard = ({offer, onPlaceCardMouseEnter, onPlaceCardTitleClick, isNearPlacesCard}) => {

  const {isPremium, previewImage, price, isFavorite, title, rating, type} = offer;

  const handlePlaceCardTitleClick = (evt) => {
    evt.preventDefault();
    onPlaceCardTitleClick(offer);
  };

  const getPremiumMark = () => isPremium ? <div className="place-card__mark"><span>Premium</span></div> : ``;
  const articleClassName = `place-card ${isNearPlacesCard ? `near-places__card` : `cities__place-card`}`;
  const imageWrapperClassName = `place-card__image-wrapper ${isNearPlacesCard ? `near-places__image-wrapper` : `cities__image-wrapper`}`;

  return (

    <article
      className={articleClassName}
      onMouseEnter={() => onPlaceCardMouseEnter(offer)}
    >
      {isNearPlacesCard ? getPremiumMark() : ``}
      <div className={imageWrapperClassName}>
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
          <a href="/" onClick={handlePlaceCardTitleClick}>{title}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

PlaceCard.propTypes = {
  offer: offerType.isRequired,
  onPlaceCardTitleClick: PropTypes.func.isRequired,
  onPlaceCardMouseEnter: PropTypes.func.isRequired,
  isNearPlacesCard: PropTypes.bool,
};

export default PlaceCard;
