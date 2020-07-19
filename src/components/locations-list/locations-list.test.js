import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import {ActionCreator} from '../../actions/types';
import {store} from '../../test-data/store';

import LocationsList from './locations-list';

describe(`LocationsList`, () => {
  let tree;

  beforeEach(() => {

    store.dispatch = jest.fn();

    tree = renderer.create(
        <Provider store={store}>
          <LocationsList />
        </Provider>);
  });

  test(`LocationsList component should render correctly`, () => {
    expect(tree.toJSON()).toMatchSnapshot();
  });

  test(`LocationsList should dispatch an action on click`, () => {
    renderer.act(() => {
      tree.root.findByType(`a`).props.onClick();
    });

    expect(store.dispatch).toHaveBeenCalledTimes(2);
    expect(store.dispatch).toHaveBeenCalledWith(
        ActionCreator.changeCity(`Stockholm`)
    );
    expect(store.dispatch).toHaveBeenCalledWith(
        ActionCreator.setOffers(`Stockholm`)
    );
  });
});
