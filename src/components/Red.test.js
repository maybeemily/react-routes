import React from 'react';
import { shallow } from 'enzyme';
import Red from './Red';

describe('Header component', () => {
  it('renders the header', () => {
    const wrapper = shallow(<Red/>);
    expect(wrapper).toMatchSnapshot();
  });
});
