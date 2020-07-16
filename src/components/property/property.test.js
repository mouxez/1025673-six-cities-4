import React from 'react';
import renderer from 'react-test-renderer';
import {offers} from '../../test-data/offers';
import {store} from '../../test-data/store';
import {Provider} from 'react-redux';

import Property from './property';

test(`Property should render correctly with state from Store`, () => {
  const tree = renderer.create(
      <Provider store={store}>
        <Property
          offer={offers[0]}
          onPlaceCardTitleClick={jest.fn()}
        />
      </Provider>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
