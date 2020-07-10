import {MAX_COUNT_CITIES} from './data/constants';

const extend = (a, b) => {
  return Object.assign({}, a, b);
};

const getCities = (offers) => {
  const cities = offers.reduce((acc, offer, index) => {
    acc[index] = offer.city;
    return acc;
  }, []);
  const uniqueCities = [...new Set(cities)];
  if (uniqueCities.length > MAX_COUNT_CITIES) {
    return uniqueCities.slice(MAX_COUNT_CITIES);
  }
  return uniqueCities;
};

const getOffersByCity = (city, offers) => {
  return offers.filter((offer) => offer.city.name === city);
};

export {
  extend,
  getCities,
  getOffersByCity,
};
