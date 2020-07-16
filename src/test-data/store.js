import configureStore from 'redux-mock-store';
import {cities} from './cities';
import {offers} from './offers';

const mockStore = configureStore([]);

const store = mockStore({
  activeCityName: cities[0].name,
  offers,
  cities,
});

export {store};
