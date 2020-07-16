import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import {store} from '../../test-data/store';

import App from './app';

test(`App should render correctly with state from Store`, () => {
  const tree = renderer.create(
      <Provider store={store}>
        <App />
      </Provider>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
