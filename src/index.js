import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App.jsx';

const Settings = {
  PLACES_COUNT: 312,
};

ReactDOM.render(<App placesCount={Settings.PLACES_COUNT}/>, document.getElementById(`root`));
