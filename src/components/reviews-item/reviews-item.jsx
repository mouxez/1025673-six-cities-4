import React from 'react';
import {reviewType} from '../../types/review';
import moment from 'moment';

const ReviewsItem = ({review}) => {
  const {avatarUrl, user, rating, description, date} = review;

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={avatarUrl} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {user}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: (Math.floor(rating) * 20 + `%`)}}></span>
            <span className="visually-hidden">{rating}</span>
          </div>
        </div>
        <p className="reviews__text">
          {description}
        </p>
        <time className="reviews__time" dateTime={moment(date).format(`YYYY-MM-DD`)}>{moment(date).format(`MMMM YYYY`)}</time>
      </div>
    </li>
  );
};

ReviewsItem.propTypes = {
  review: reviewType.isRequired,
};

export default ReviewsItem;
