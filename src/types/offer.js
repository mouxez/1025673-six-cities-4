import PropTypes from "prop-types";
import {HOUSING_TYPES} from '../data/constants';

const offerType = PropTypes.shape({
  isPremium: PropTypes.bool.isRequired,
  imgSrc: PropTypes.string.isRequired,
  imgDescription: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  isBookmarked: PropTypes.bool.isRequired,
  placeDescription: PropTypes.string.isRequired,
  placeType: PropTypes.oneOf(HOUSING_TYPES).isRequired,
});

export {offerType};
