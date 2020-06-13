import {HOUSING_TYPES} from '../data/constants';

const getRandomInteger = (min, max) => {
  let rand = min - 0.5 + Math.random() * (max - min + 1);

  return Math.round(rand);
};

const arrayRandElement = (arr) => {
  let rand = Math.floor(Math.random() * arr.length);
  return arr[rand];
};

const createOffer = () => {
  return (
    {
      id: getRandomInteger(1, 100),
      isPremium: Math.random() > 0.5,
      imgSrc: `http://picsum.photos/260/200?r=${Math.random()}`,
      imgDescription: `Some photo description`,
      price: getRandomInteger(40, 90),
      isBookmarked: Math.random() > 0.5,
      placeDescription: `Some place description`,
      placeType: arrayRandElement(HOUSING_TYPES),
    }
  );
};

const offers = [];
for (let i = 0; i < 5; i++) {
  offers[i] = createOffer();
}

export {offers};
