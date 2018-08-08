import React from 'react';
import { shallow } from 'enzyme'

import Timer from './Timer';
import Keypad from './components/Keypad'

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

  it('sets timer to correct countdown value', () => {
    const props = { timer: 3600 }
    const wrapper = setup(props)

    expect(wrapper.state().timer).toBe(props.timer)
  })

  it('runs the timer', () => {
    jest.useFakeTimers()
    const props = { timer: 3600 }
    const wrapper = setup(props)

    wrapper.instance().runTimer()

    expect(setInterval).toHaveBeenCalled()
    expect(setInterval).toHaveBeenCalledWith(expect.any(Function), 60)
    expect(wrapper.state().intervalId).toBeDefined()
  })

  it('stops the timer', () => {
    jest.useFakeTimers()

    const props = { timer: 3600 }
    const wrapper = setup(props)

    wrapper.instance().runTimer()
    wrapper.instance().stopTimer()

    expect(clearInterval).toHaveBeenCalled()
    expect(clearInterval).toHaveBeenCalledWith(wrapper.state().intervalId)
  })

  it('clears the timer', () => {
    const props = { timer: 3600 }
    const wrapper = setup(props)

    wrapper.instance().resetTimer()

    expect(wrapper.state().timer).toBe(0)
  })

  it('renders a keypad', () => {
    const wrapper = setup()
    expect(wrapper.find(Keypad).length).toBe(1)
  })
})
