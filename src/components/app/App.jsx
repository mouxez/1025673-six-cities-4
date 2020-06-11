import React from 'react';
import Main from '../main/Main.jsx';

// eslint-disable-next-line react/prop-types
const App = ({offers}) => {
  return (
    <Main offers={offers} />
  );
};

export default App;
