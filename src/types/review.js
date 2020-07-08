import PropTypes from "prop-types";

const reviewType = PropTypes.shape({
  avatarUrl: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
});

export {reviewType};
