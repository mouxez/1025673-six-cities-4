import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {offerType} from '../../types/offer';
import {offers} from '../../mock/offers';

import Main from '../main/main';
import Property from '../property/property';

class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeOffer: null
    };
    this._handlePlaceCardTitleClick = this._handlePlaceCardTitleClick.bind(this);
  }

  _handlePlaceCardTitleClick(clickedOffer) {
    this.setState({
      activeOffer: clickedOffer,
    });
  }
  _renderMain() {
    if (this.state.activeOffer) {
      return (
        <Property
          offer={this.state.activeOffer}
          onPlaceCardTitleClick={this._handlePlaceCardTitleClick}
        />
      );
    } else {
      return (
        <Main
          onPlaceCardTitleClick={this._handlePlaceCardTitleClick}
        />
      );
    }
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderMain()}
          </Route>
          <Route exact path="/dev-detailed">
            <Property
              offer={offers[0]}
              onPlaceCardTitleClick={this._handlePlaceCardTitleClick}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  offers: PropTypes.arrayOf(
      offerType.isRequired
  ).isRequired,
};

const mapStateToProps = (state) => ({
  offers: state.offers,
});

export default connect(mapStateToProps, null)(App);
