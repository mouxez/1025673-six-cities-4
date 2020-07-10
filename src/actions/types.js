import {offers} from '../mock/offers';
import {getOffersByCity} from '../utilits';

const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  GET_OFFERS: `GET_OFFERS`,
};

const ActionCreator = {
  changeCity: (cityName) => {
    return {
      type: ActionType.CHANGE_CITY,
      payload: cityName,
    };
  },
  getOffers: (cityName) => {
    const filteredOffers = getOffersByCity(cityName, offers);
    return {
      type: ActionType.GET_OFFERS,
      payload: filteredOffers,
    };
  },
};

export {
  ActionType,
  ActionCreator,
};
