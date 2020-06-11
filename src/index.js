import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App.jsx';
const OFFERS_COUNT = 5;

const getRandomInteger = (min, max) => {
  let rand = min - 0.5 + Math.random() * (max - min + 1);

  return Math.round(rand);
};

const createOffer = () => {
  return (
    {
      id: Math.random(),
      isPremium: Math.random() > 0.5,
      imgSrc: `img/room.jpg`,
      imgDescription: `Some photo description`,
      price: getRandomInteger(40, 90),
      isBookmarked: Math.random() > 0.5,
      placeDescription: `Some place description`,
      placeType: `Apartment`,
    }
  );
};

const offers = [];
for (let i = 0; i < OFFERS_COUNT; i++) {
  offers[i] = createOffer();
}

ReactDOM.render(<App offers={offers} />, document.getElementById(`root`));
