import React from 'react';
import { shallow } from 'enzyme';
import { CartComponent } from './Cart';

const cartProducts = [];

describe('Component Cart', () => {
  it('should render without crashing', () => {
    const component = shallow(<CartComponent cartProducts={cartProducts} />);
    expect(component).toBeTruthy();
  });
});
