import React from 'react';
import Main from '../main/main';
import PropTypes from "prop-types";
import {offerType} from '../../types/offer';

const logoButtonHandler = () => {};

const App = ({offers}) => {
  return (
    <Main offers={offers} onLogoButtonClick={logoButtonHandler} />
  );
};

App.propTypes = {
  offers: PropTypes.arrayOf(
      offerType.isRequired
  ).isRequired,
};

export default App;
