import React from 'react';
import { shallow } from 'enzyme'
import { Duration } from 'luxon'

import Timer from './Timer';
import Keypad from './components/Keypad'
import Display from './components/Display'
import Controls from './components/Controls'

describe('Timer', () => {

  const setup = (props) => shallow(<Timer {...props} />)

  it('renders without crashing', () => {
    const wrapper = setup()
    expect(wrapper.exists()).toBe(true)
  });

  it('initializes timer state', () => {
    const wrapper = setup()
    expect(wrapper.state().timer.milliseconds).toBe(0)
  })

  it('sets timer to correct countdown value', () => {
    const props = { timer: 1000 }
    const wrapper = setup(props)

    wrapper.instance().setTimer({ seconds: 1 })

    expect(wrapper.state().timer.toFormat('S')).toBe((props.timer + 1000).toString())
  })

  it('runs the timer', () => {
    jest.useFakeTimers()
    const props = { timer: 3600 }
    const wrapper = setup(props)

    wrapper.instance().runTimer()

    expect(setInterval).toHaveBeenCalled()
    expect(setInterval).toHaveBeenCalledWith(expect.anything(), 60)
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

  it('stopes the timer if countdown reaches zero', () => {
    jest.useFakeTimers()

    const props = { timer: 1000 }
    const wrapper = setup(props)

    wrapper.instance().runTimer()
    jest.runAllTimers()

    expect(wrapper.state().timer.toFormat('S')).toBe('0')
  })

  it('clears the timer', () => {
    const props = { timer: 3600 }
    const wrapper = setup(props)

    wrapper.instance().resetTimer()

    expect(wrapper.state().timer).toEqual(expect.any(Duration))
  })

  it('renders a keypad', () => {
    const wrapper = setup()
    expect(wrapper.find(Keypad).length).toBe(1)
  })

  it('renders a Display', () => {
    const wrapper = setup()
    expect(wrapper.find(Display).length).toBe(1)
  })

  it('renders a Controls', () => {
    const wrapper = setup()
    expect(wrapper.find(Controls).length).toBe(1)
  })
})
