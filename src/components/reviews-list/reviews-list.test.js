import React from 'react';
import renderer from 'react-test-renderer';
import {reviews} from '../../test-data/reviews';

import ReviewsList from './reviews-list';

test(`ReviewsList should render correctly`, () => {
  const tree = renderer.create(
      <ReviewsList reviews={reviews}/>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
