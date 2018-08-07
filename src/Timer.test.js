import React from 'react';
import { shallow } from 'enzyme'

import Timer from './Timer';

describe('Timer', () => {

  const setup = (props) => shallow(<Timer {...props} />)

  it('renders without crashing', () => {
    const wrapper = setup()
    expect(wrapper.exists()).toBe(true)
  });

  it('initializes timer state', () => {
    const wrapper = setup()
    expect(wrapper.state().timer).toBe(0)
  })
})
