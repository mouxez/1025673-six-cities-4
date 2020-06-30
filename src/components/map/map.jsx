import React from 'react';
import Leaflet from 'leaflet';
import PropTypes from 'prop-types';
import {offerType} from '../../types/offer';

class Map extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {offers} = this.props;
    const startCityCoordinates = [52.38333, 4.9];
    const icon = Leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });
    const mapZoom = 12;
    const map = Leaflet.map(`map`, {
      center: startCityCoordinates,
      mapZoom,
      zoomControl: false,
      marker: true,
    });

    map.setView(startCityCoordinates, mapZoom);

    Leaflet.tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
      attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
    }).addTo(map);

    offers.map((offer) => {
      Leaflet.marker(Object.values(offer.location), {icon}).addTo(map);
    });
  }

  render() {
    return (
      <div id="map" style={{width: `100%`, height: `100%`}} />
    );
  }
}

Map.propTypes = {
  offers: PropTypes.arrayOf(
      offerType.isRequired
  ).isRequired,
};

export default Map;
