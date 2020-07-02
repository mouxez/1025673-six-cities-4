import React from 'react';
import renderer from 'react-test-renderer';
import ReviewsItem from './reviews-item';
import {reviews} from '../../test-data/reviews';

test(`ReviewsItem should render correctly`, () => {
  const tree = renderer.create(
      <ReviewsItem review={reviews[0]} />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
