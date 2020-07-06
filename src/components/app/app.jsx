import React from 'react';
import Main from '../main/main';
import PropTypes from "prop-types";
import {offerType} from '../../types/offer';
import {Switch, Route, BrowserRouter} from "react-router-dom";
import PageMainProperty from '../page-main-property/page-main-property';

class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeOfferTitle: null,
      activeOfferData: null,
    };
    this.handlePlaceCardTitleClick = this.handlePlaceCardTitleClick.bind(this);
    this.handlePlaceCardMouseEnter = this.handlePlaceCardMouseEnter.bind(this);
  }
  handlePlaceCardTitleClick(offer) {
    this.setState({activeOfferTitle: offer});
  }
  handlePlaceCardMouseEnter(offer) {
    this.setState({activeOfferData: offer});
  }
  _renderMain() {
    if (this.state.activeOfferTitle) {
      return (
        <PageMainProperty
          offer={this.state.activeOfferTitle}
          onPlaceCardTitleClick={this.handlePlaceCardTitleClick}
          onPlaceCardMouseEnter={this.handlePlaceCardMouseEnter}
        />
      );
    } else {
      return (
        <Main
          offers={this.props.offers}
          onPlaceCardTitleClick={this.handlePlaceCardTitleClick}
          onPlaceCardMouseEnter={this.handlePlaceCardMouseEnter}
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
            <PageMainProperty
              offer={offers[0]}
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

export default App;
