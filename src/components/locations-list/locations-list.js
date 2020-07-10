import React from 'react';
import PropTypes from 'prop-types';
import {ActionCreator} from '../../actions/types';
import {connect} from 'react-redux';

const LocationsList = ({cities, onCityClick, activeCityName}) => {
  return (
    <ul className="locations__list tabs__list">
      {cities.map((city) => {
        const activeClassName = activeCityName === city.name ? `tabs__item--active` : ``;
        return (
          <li className="locations__item" key={city.name}>
            <a
              href="#"
              className={`locations__item-link tabs__item ${activeClassName}`}
              onClick={() => onCityClick(city.name)}
            >
              <span>{city.name}</span>
            </a>
          </li>
        );
      })}
    </ul>
  );
};

LocationsList.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  onCityClick: PropTypes.func.isRequired,
  activeCityName: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  activeCityName: state.activeCityName,
  cities: state.cities,
});

const mapDispatchToProps = (dispatch) => ({
  onCityClick(city) {
    dispatch(ActionCreator.changeCity(city));
    dispatch(ActionCreator.getOffers(city));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(LocationsList);
