import {offers} from '../mock/offers';
import {getOffersByCity} from '../utilits';

const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  SET_OFFERS: `SET_OFFERS`,
};

const ActionCreator = {
  changeCity: (cityName) => {
    return {
      type: ActionType.CHANGE_CITY,
      payload: cityName,
    };
  },
  setOffers: (cityName) => {
    const filteredOffers = getOffersByCity(cityName, offers);
    return {
      type: ActionType.SET_OFFERS,
      payload: filteredOffers,
    };
  },
};

export {
  ActionType,
  ActionCreator,
};
