import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../actions/types';

const LocationsList = ({cities, onCityNameClick, activeCityName}) => {
  return (
    <ul className="locations__list tabs__list ">
      {cities.map((city) => {
        const activeClass = activeCityName === city.name ? `tabs__item--active` : ``;
        return (
          <li key={city.name} className="locations__item">
            <a
              className={`locations__item-link tabs__item ` + activeClass}
              href="#"
              onClick={() => {
                onCityNameClick(city.name);
              }}
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
  onCityNameClick: PropTypes.func.isRequired,
  activeCityName: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
  activeCityName: state.activeCityName,
  cities: state.cities
});

const mapDispatchToProps = (dispatch) => ({
  onCityNameClick(city) {
    dispatch(ActionCreator.changeCity(city));
    dispatch(ActionCreator.setOffers(city));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(LocationsList);
