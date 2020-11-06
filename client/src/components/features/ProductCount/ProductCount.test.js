import React from 'react';
import { shallow } from 'enzyme';
import { ProductCountComponent } from './ProductCount';

describe('Component ProductCount', () => {
  it('should render without crashing', () => {
    const component = shallow(<ProductCountComponent />);
    expect(component).toBeTruthy();
  });
});
