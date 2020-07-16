import React from 'react';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';
import {offerType} from '../../types/offer';
import {connect} from 'react-redux';

class Map extends React.PureComponent {
  constructor(props) {
    super(props);
    this._mapRef = React.createRef();
    this._activeCity = this._getActiveCity();
  }

  _getActiveCity() {
    const {cities, activeCityName} = this.props;

    return cities.filter((city) => city.name === activeCityName)[0];
  }

  componentDidUpdate(prevProps) {
    const {offers} = this.props;

    if (prevProps.activeCityName !== this.props.activeCityName) {
      this._activeCity = this._getActiveCity();
      this._pins.forEach((pin) => this._map.removeLayer(pin));
      this._map.flyTo(Object.values(this._activeCity.location));
      this._renderMapPins(offers, this._icon, this._map);
    }

    if (prevProps.currentOffer !== this.props.currentOffer) {
      this._renderMapPinsCurrent(this.props.currentOffer, offers, this._icon, this._map);
    }
  }

  componentDidMount() {
    const {offers, currentOffer} = this.props;

    const mapContainer = this._mapRef.current;
    const startCityCoordinates = [this._activeCity.location.latitude, this._activeCity.location.longitude];

    const zoom = 12;
    const icon = this._icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 40]
    });
    this._activeIcon = leaflet.icon({
      iconUrl: `img/pin-active.svg`,
      iconSize: [30, 40]
    });

    const map = this._map = leaflet.map(mapContainer, {
      center: startCityCoordinates,
      zoom,
      scrollWheelZoom: false,
      zoomControl: false,
      marker: true,
      layers: [
        leaflet.tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
          attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
        })]
    });

    map.once(`focus`, () => {
      map.scrollWheelZoom.enable();
    });

    if (currentOffer) {
      this._renderMapPinsCurrent(currentOffer, offers, this._icon, this._map);
    } else {
      this._renderMapPins(offers, icon, map);
    }
  }

  _renderMapPinsCurrent(currentOffer, offers, icon, map) {
    this._renderMapPins(offers, icon, map);
    leaflet.marker(Object.values(currentOffer.location), {icon: this._activeIcon}).addTo(map);
  }

  _renderMapPins(offers, icon, map) {
    const pins = [];
    offers.forEach((offer) => {
      const pin = leaflet.marker(Object.values(offer.location), {icon}).addTo(map);

      pins.push(pin);
    });
    this._pins = pins;
  }

  componentWillUnmount() {
    const mapContainer = this._mapRef.current;
    mapContainer.remove();
  }

  render() {
    return (
      <div
        ref={this._mapRef}
        style={{width: `100%`, height: `100%`}}
      >
      </div>
    );
  }
}

Map.propTypes = {
  currentOffer: offerType,
  offers: PropTypes.arrayOf(
      offerType.isRequired
  ).isRequired,
  cities: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  activeCityName: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  cities: state.cities,
  activeCityName: state.activeCityName,
  offers: state.offers,
});

export default connect(mapStateToProps, null)(Map);
