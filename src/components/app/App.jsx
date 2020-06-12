import React from 'react';
import Main from '../main/Main';
import PropTypes from "prop-types";

const App = ({offers}) => {
  return (
    <Main offers={offers} />
  );
};

App.propTypes = {
  offers: PropTypes.array.isRequired,
};

export default App;
