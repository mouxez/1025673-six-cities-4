import React from 'react';
import renderer from 'react-test-renderer';
import Main from './main';
import {offers} from '../../mock/offers';

test(`Main should render correctly`, () => {
  const tree = renderer.create(<Main offers={offers} />).toJSON();

  expect(tree).toMatchSnapshot();
});
