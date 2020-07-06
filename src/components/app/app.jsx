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
      activeOffer: null,
      activeOfferData: null,
    };
    this.handlePlaceCardTitleClick = this.handlePlaceCardTitleClick.bind(this);
    this.handlePlaceCardMouseEnter = this.handlePlaceCardMouseEnter.bind(this);
  }
  handlePlaceCardTitleClick(clickedOffer) {
    this.setState({activeOffer: clickedOffer});
  }
  handlePlaceCardMouseEnter(hoveredOffer) {
    this.setState({activeOfferData: hoveredOffer});
  }
  _renderMain() {
    if (this.state.activeOffer) {
      return (
        <PageMainProperty
          offer={this.state.activeOffer}
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
              onPlaceCardTitleClick={this.handlePlaceCardTitleClick}
              onPlaceCardMouseEnter={this.handlePlaceCardMouseEnter}
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
