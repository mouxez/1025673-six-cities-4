import React from 'react';
import renderer from 'react-test-renderer';
import Map from './map';
import {offers} from '../../test-data/offers';

test(`Map should render correctly`, () => {
  const tree = renderer.create(<Map offers={offers} />).toJSON();

  expect(tree).toMatchSnapshot();
});
