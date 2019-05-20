import React from 'react';
import { shallow } from 'enzyme';
import Blue from './Blue';

describe('Header component', () => {
  it('renders the header', () => {
    const wrapper = shallow(<Blue/>);
    expect(wrapper).toMatchSnapshot();
  });
});
