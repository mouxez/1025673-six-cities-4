import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import {store} from '../../test-data/store';

import Main from './main';

test(`Main should render correctly`, () => {
  const tree = renderer.create(
      <Provider store={store}>
        <Main
          onPlaceCardTitleClick={jest.fn()}
        />
      </Provider>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
