import React from 'react';
import renderer from 'react-test-renderer';
import {offers} from '../../test-data/offers';
import {Provider} from 'react-redux';
import {store} from '../../test-data/store';

import Map from './map';

test(`Map should render correctly`, () => {
  const tree = renderer.create(
      <Provider store={store}>
        <Map
          currentOffer={offers[0]}
        />
      </Provider>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
