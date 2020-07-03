import React from 'react';
import {offerType} from '../../types/offer';
import PropTypes from 'prop-types';

const NearPlacesCard = ({offer, onOfferTitleClick, onMouseEnter}) => {
  const {previewImage, price, isFavorite, title, rating, type} = offer;

  const handleOfferTitleClick = (evt) => {
    evt.preventDefault();
    onOfferTitleClick(offer);
  };

  return (
    <article className="near-places__card place-card"
      onMouseEnter={() => onMouseEnter(offer)}
    >
      <div className="near-places__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place image" />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              {isFavorite ? <use xlinkHref="#icon-bookmark"></use> : ``}
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: (Math.floor(rating) * 20 + `%`)}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#" onClick={handleOfferTitleClick}>{title}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

NearPlacesCard.propTypes = {
  offer: offerType.isRequired,
  onOfferTitleClick: PropTypes.func.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
};

export default NearPlacesCard;
