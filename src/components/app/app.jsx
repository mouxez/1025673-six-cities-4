import React from 'react';
import Main from '../main/main';
import PropTypes from "prop-types";
import {offerType} from '../../types/offer';
import {Switch, Route, BrowserRouter} from "react-router-dom";
import OfferDetailed from '../offer-detailed/offer-detailed';

class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeOffer: null,
    };
    this.handleOfferTitleClick = this.handleOfferTitleClick.bind(this);
  }
  handleOfferTitleClick(offer) {
    this.setState({activeOffer: offer});
  }
  _renderMain() {
    if (this.state.activeOffer) {
      return (
        <OfferDetailed offer={this.state.activeOffer} />
      );
    } else {
      return (
        <Main offers={this.props.offers} onOfferTitleClick={this.handleOfferTitleClick} />
      );
    }
  }

  render() {
    const {offers} = this.props;
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderMain()}
          </Route>
          <Route exact path="/dev-detailed">
            <OfferDetailed offer={offers[0]} />
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

export default App;
