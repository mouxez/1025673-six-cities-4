import React from 'react';
import renderer from 'react-test-renderer';
import PageMainProperty from './page-main-property';
import {offers} from '../../test-data/offers';

test(`PageMainProperty should render correctly`, () => {
  const tree = renderer.create(
      <PageMainProperty
        offer={offers[0]}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
