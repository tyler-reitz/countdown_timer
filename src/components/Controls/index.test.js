import React from 'react'
import { shallow } from 'enzyme'
import checkPropTypes from 'check-prop-types'

import Controls from './'

describe('Controls', () => {

  const handleStart = jest.fn()
  const handleStop = jest.fn()
  const handleReset = jest.fn()

  const props = {
    handleStart,
    handleStop,
    handleReset
  }

  const setup = props => shallow(<Controls {...props} />)

  it('renders', () => {
    const wrapper = setup(props)
    expect(wrapper.exists()).toBe(true)
  })

  it('does not throw with correct props', () => {
    let propErrors = checkPropTypes(
      Controls.propTypes,
      props,
      'prop',
      Controls.name
    )

    expect(propErrors).toBeUndefined()
  })

  it('render the correct number of controls', () => {
    const wrapper = setup(props)
    expect(wrapper.find('button').length).toBe(3)
  })

  it('start the timer', () => {
    const wrapper = setup(props).find('button').filterWhere(n => n.text() === 'start')

    wrapper.simulate('click')

    expect(handleStart.mock.calls.length).toBe(1)
  })

  it('start the timer', () => {
    const wrapper = setup(props).find('button').filterWhere(n => n.text() === 'stop')

    wrapper.simulate('click')

    expect(handleStop.mock.calls.length).toBe(1)
  })

  it('start the timer', () => {
    const wrapper = setup(props).find('button').filterWhere(n => n.text() === 'reset')

    wrapper.simulate('click')

    expect(handleReset.mock.calls.length).toBe(1)
  })
})
