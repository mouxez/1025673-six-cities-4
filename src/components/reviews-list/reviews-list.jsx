import React from 'react';
import PropTypes from 'prop-types';
import {reviewType} from '../../types/review';
import moment from 'moment';

const ReviewsList = ({reviews}) => {
  const reviewsCount = reviews.length;
  return (
    <>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviewsCount}</span></h2>
      <ul className="reviews__list">
        {reviewsCount > 0 ? reviews.map((review) => {
          return (
            <li className="reviews__item" key={review.id}>
              <div className="reviews__user user">
                <div className="reviews__avatar-wrapper user__avatar-wrapper">
                  <img className="reviews__avatar user__avatar" src={review.user.avatarUrl} width="54" height="54" alt="Reviews avatar" />
                </div>
                <span className="reviews__user-name">
                  {review.user.name}
                </span>
              </div>
              <div className="reviews__info">
                <div className="reviews__rating rating">
                  <div className="reviews__stars rating__stars">
                    <span style={{width: `${review.rating * 20}%`}} />
                    <span className="visually-hidden">Rating</span>
                  </div>
                </div>
                <p className="reviews__text">
                  {review.comment}
                </p>
                <time className="reviews__time" dateTime={moment(review.date).format(`YYYY-MM-DD`)}>{moment(review.date).format(`MMMM YYYY`)}</time>
              </div>
            </li>
          );
        }) : null}
      </ul>
    </>
  );
};

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(
      reviewType.isRequired
  ).isRequired,
};

export default ReviewsList;
