import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import Reducer from './reducer';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

const store = createStore(
    Reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
);

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>
    ,
    document.getElementById(`root`));
