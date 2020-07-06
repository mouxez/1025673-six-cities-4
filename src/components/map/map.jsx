import React from 'react';
import PropTypes from 'prop-types';
import Leaflet from 'leaflet';
import {offerType} from '../../types/offer';

const startCityCoordinates = [52.38333, 4.9];
const zoom = 12;

const customIcon = Leaflet.icon({
  iconUrl: `img/pin.svg`,
  iconSize: [30, 30]
});

const currentIcon = Leaflet.icon({
  iconUrl: `pin-active.svg`,
  iconSize: [30, 30]
});

class Map extends React.PureComponent {
  constructor(props) {
    super(props);
    this.mapRef = React.createRef();
    this.map = null;
  }

  _renderMapMarkers() {
    const {offers} = this.props;
    offers.forEach((offer) => Leaflet.marker(Object.values(offer.location), {customIcon}).addTo(this.map));
  }

  componentDidMount() {
    if (!this.mapRef.current) {
      return;
    }

    this.map = Leaflet.map(this.mapRef.current, {
      zoom,
      startCityCoordinates,
      zoomControl: false,
      marker: true,
    });

    this.map.setView(startCityCoordinates, zoom);

    Leaflet.tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
      attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
    }).addTo(this.map);

    const {currentOffer} = this.props;
    if (currentOffer) {
      Leaflet.marker(Object.values(currentOffer.location), {currentIcon}).addTo(this.map);
      this._renderMapMarkers();
    } else {
      this._renderMapMarkers();
    }

  }

  render() {
    return <div ref={this.mapRef} style={{width: `100%`, height: `100%`}} />;
  }
}

Map.propTypes = {
  offers: PropTypes.arrayOf(
      offerType.isRequired
  ).isRequired,
  currentOffer: offerType,
};

export default Map;
