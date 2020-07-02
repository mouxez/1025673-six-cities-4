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
      activeOfferTitle: null,
      activeOfferData: null,
    };
    this.handleOfferTitleClick = this.handleOfferTitleClick.bind(this);
    this.handleCardMouseEnter = this.handleMouseEnter.bind(this);
  }
  handleOfferTitleClick(offer) {
    this.setState({activeOfferTitle: offer});
  }
  handleMouseEnter(offer) {
    this.setState({activeOfferData: offer});
  }
  _renderMain() {
    if (this.state.activeOfferTitle) {
      return (
        <OfferDetailed offer={this.state.activeOfferTitle} />
      );
    } else {
      return (
        <Main
          offers={this.props.offers}
          onOfferTitleClick={this.handleOfferTitleClick}
          onMouseEnter={this.handleCardMouseEnter}
        />
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
