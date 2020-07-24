import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {offerType} from '../../types/offer';
import {reviewType} from '../../types/review';

import Main from '../main/main';
import Property from '../property/property';

class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeOffer: null
    };
    this.handlePlaceCardTitleClick = this.handlePlaceCardTitleClick.bind(this);
  }

  handlePlaceCardTitleClick(clickedOffer) {
    this.setState({
      activeOffer: clickedOffer,
    });
  }
  _renderMain() {
    if (this.state.activeOffer) {
      return (
        <Property
          offer={this.state.activeOffer}
          onPlaceCardTitleClick={this.handlePlaceCardTitleClick}
        />
      );
    } else {
      return (
        <Main
          onPlaceCardTitleClick={this.handlePlaceCardTitleClick}
        />
      );
    }
  }

  render() {
    const {offers, reviews} = this.props;
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderMain()}
          </Route>
          <Route exact path="/dev-detailed">
            <Property
              offer={offers[0]}
              reviews={reviews}
              onPlaceCardTitleClick={this.handlePlaceCardTitleClick}
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
  reviews: PropTypes.arrayOf(
      reviewType.isRequired
  )
};

const mapStateToProps = (state) => ({
  offers: state.offers,
  reviews: state.reviews,
});

export default connect(mapStateToProps, null)(App);
