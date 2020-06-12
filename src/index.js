import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App';
import {getRandomInteger} from './utils';

const createOffer = () => {
  return (
    {
      id: getRandomInteger(1, 100),
      isPremium: Math.random() > 0.5,
      imgSrc: `http://picsum.photos/248/152?r=${Math.random()}`,
      imgDescription: `Some photo description`,
      price: getRandomInteger(40, 90),
      isBookmarked: Math.random() > 0.5,
      placeDescription: `Some place description`,
      placeType: `Apartment`,
    }
  );
};

const offers = [];
for (let i = 0; i < 5; i++) {
  offers[i] = createOffer();
}

ReactDOM.render(<App offers={offers} />, document.getElementById(`root`));
