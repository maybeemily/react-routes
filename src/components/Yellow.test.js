import React from 'react';
import { shallow } from 'enzyme';
import Yellow from './Yellow';

describe('Header component', () => {
  it('renders the header', () => {
    const wrapper = shallow(<Yellow/>);
    expect(wrapper).toMatchSnapshot();
  });
});
