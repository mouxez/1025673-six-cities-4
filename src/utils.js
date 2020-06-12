const getRandomInteger = (min, max) => {
  let rand = min - 0.5 + Math.random() * (max - min + 1);

  return Math.round(rand);
};

const arrayRandElement = (arr) => {
  let rand = Math.floor(Math.random() * arr.length);
  return arr[rand];
};

const HOUSING_TYPES = [`Apartment`, `Room`, `House`, `Hotel`];

export {getRandomInteger, HOUSING_TYPES, arrayRandElement};
