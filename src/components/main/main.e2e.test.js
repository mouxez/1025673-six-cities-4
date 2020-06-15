import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Main from './main';
import {offers} from '../../mock/offers';

Enzyme.configure({
  adapter: new Adapter(),
});

test(`Main logo button should be preesed`, () => {
  const onLogoButtonClick = jest.fn();

  const mainScreen = shallow(
      <Main offers={offers} onLogoButtonClick={onLogoButtonClick} />
  );
  const logoButton = mainScreen.find(`a.header__logo-link`);

  logoButton.props().onClick();

  expect(onLogoButtonClick.mock.calls.length).toBe(1);
});
