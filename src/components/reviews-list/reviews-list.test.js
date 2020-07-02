import React from 'react';
import renderer from 'react-test-renderer';
import ReviewsList from './reviews-list';
import {reviews} from '../../test-data/reviews';

test(`ReviewsList should render correctly`, () => {
  const tree = renderer.create(
      <ReviewsList reviews={reviews}/>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
