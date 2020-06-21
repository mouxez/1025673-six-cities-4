import React from 'react';
import Main from '../main/main';
import PropTypes from "prop-types";
import {offerType} from '../../types/offer';
import {Switch, Route, BrowserRouter} from "react-router-dom";
import OfferDetailed from '../offer-detailed/offer-detailed';

const logoButtonHandler = () => {};

class App extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  _renderApp() {
    const {offers} = this.props;
    return (
      <Main offers={offers} onLogoButtonClick={logoButtonHandler} />
    );
  }
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/dev-detailed">
            <OfferDetailed />
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
