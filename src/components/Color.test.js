import React from 'react';
import { shallow } from 'enzyme';
import Color from './Color';

describe('Color component', () => {
  it('renders the color in the url', () => {
    const match = {
      params: {
        color: 'hotpink'
      }
    };
    const wrapper = shallow(<Color match={match}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
