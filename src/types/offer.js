import PropTypes from "prop-types";
import {HOUSING_TYPES} from '../data/constants';

const offerType = PropTypes.shape({
  bedrooms: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  goods: PropTypes.array.isRequired,
  host: PropTypes.shape({
    name: PropTypes.string.isRequired,
    avatarUrl: PropTypes.string.isRequired,
    isPro: PropTypes.bool.isRequired,
  }),
  id: PropTypes.number.isRequired,
  images: PropTypes.array.isRequired,
  isPremium: PropTypes.bool.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  maxAdults: PropTypes.number.isRequired,
  previewImage: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.oneOf(HOUSING_TYPES).isRequired,
});

export {offerType};
