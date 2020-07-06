import React from 'react';
import ReviewsItem from '../reviews-item/reviews-item';
import PropTypes from "prop-types";
import {reviewType} from '../../types/review';

const ReviewsList = ({reviews}) => {
  const reviewsCount = reviews.length;
  return (
    <>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviewsCount}</span></h2>
      <ul className="reviews__list">
        {reviews.length > 0 ? reviews.map((review) => {
          return (
            <ReviewsItem review={review} key={review.id} />
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