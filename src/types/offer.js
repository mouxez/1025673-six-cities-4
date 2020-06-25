import PropTypes from "prop-types";
import {HOUSING_TYPES} from '../data/constants';

const offerType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  isPremium: PropTypes.bool.isRequired,
  imgSrc: PropTypes.string.isRequired,
  imgDescription: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  isBookmarked: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  placeType: PropTypes.oneOf(HOUSING_TYPES).isRequired,
  rating: PropTypes.string.isRequired,
  photoCollection: PropTypes.array.isRequired,
  bedroomsCount: PropTypes.number.isRequired,
  placeCapacity: PropTypes.number.isRequired,
  facilities: PropTypes.array.isRequired,
  host: PropTypes.shape({
    hostName: PropTypes.string.isRequired,
    avatarSrc: PropTypes.string.isRequired,
    isSuper: PropTypes.bool.isRequired,
  }),
  locationDescription: PropTypes.array.isRequired,
});

export {offerType};
