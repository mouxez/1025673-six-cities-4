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
      activeOffer: -1,
    };
    this.handleOfferTitleClick = this.handleOfferTitleClick.bind(this);
  }
  handleOfferTitleClick(index) {
    this.setState({activeOffer: index});
  }
  _renderMain() {
    const {offers} = this.props;
    const {activeOffer} = this.state;

    if (activeOffer === -1) {
      return (
        <Main offers={offers} onOfferTitleClick={(index) => this.handleOfferTitleClick(index)} />
      );
    }
    if (offers[activeOffer]) {
      return (
        <OfferDetailed offer={offers[activeOffer]} />
      );
    }
    return null;
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderMain()}
          </Route>
          <Route exact path="/dev-detailed">
            <OfferDetailed offer={this.props.offers[0]} />
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
