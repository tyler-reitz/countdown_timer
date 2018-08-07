import React from 'react';
import { shallow } from 'enzyme'

import Timer from './Timer';

it('renders without crashing', () => {
  const wrapper = shallow(<Timer />)
  expect(wrapper.exists()).toBe(true)
});
