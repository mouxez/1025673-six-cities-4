import React from 'react';
import PropTypes from 'prop-types';
import Leaflet from 'leaflet';
import {offerType} from '../../types/offer';

const startCityCoordinates = [52.38333, 4.9];
const zoom = 12;
const pinIcon = Leaflet.icon({
  iconUrl: `img/pin.svg`,
  iconSize: [30, 40]
});
const activeIcon = Leaflet.icon({
  iconUrl: `img/pin-active.svg`,
  iconSize: [30, 40]
});

class Map extends React.PureComponent {
  constructor(props) {
    super(props);
    this.mapRef = React.createRef();
    this.map = null;
  }

  componentDidMount() {
    if (!this.mapRef.current) {
      return;
    }

    const {offers, currentOffer} = this.props;
    const mapContainer = this.mapRef.current;

    const map = Leaflet.map(mapContainer, {
      center: startCityCoordinates,
      zoom,
      zoomControl: false,
      marker: true,
      layers: [
        Leaflet.tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
          attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
        })]
    });

    if (currentOffer) {
      this._renderMapMarkers(offers, pinIcon, map);
      Leaflet.marker(Object.values(currentOffer.location), {icon: activeIcon}).addTo(map);
    } else {
      this._renderMapMarkers(offers, pinIcon, map);
    }
  }

  _renderMapMarkers(cards, icon, map) {
    cards.forEach((card) => {
      Leaflet.marker(Object.values(card.location), {icon}).addTo(map);
    });
  }

  componentWillUnmount() {
    const mapContainer = this.mapRef.current;
    mapContainer.remove();
  }

  render() {
    return (
      <div
        ref={this.mapRef}
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
};

export default Map;
