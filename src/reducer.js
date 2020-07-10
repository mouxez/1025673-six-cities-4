import {offers} from './mock/offers';
import {extend, getCities, getOffersByCity} from './utilits';
import {ActionType} from './actions/types';

const cities = getCities(offers);
const filteredOffers = getOffersByCity(cities[0].name, offers);

const initialState = {
  activeCityName: cities[0].name,
  offers: filteredOffers,
  cities,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return extend(state, {
        activeCityName: action.payload,
      });
    case ActionType.GET_OFFERS:
      return extend(state, {
        offers: action.payload,
      });
    default:
      return state;
  }
};

export {
  initialState,
};
