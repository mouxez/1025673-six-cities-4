import React from 'react';
import Main from '../main/Main.jsx';

// eslint-disable-next-line react/prop-types
const App = ({placesCount}) => {
  return (
    <Main placesCount={placesCount}/>
  );
};

export default App;
