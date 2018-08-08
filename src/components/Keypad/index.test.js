import React from 'react'
import { shallow } from 'enzyme'
import checkPropTypes from 'check-prop-types'

import Keypad from './'

describe('Keypad', () => {

  const handleKeypadClickMock = jest.fn()

  const props = {
    handleKeypadClick: handleKeypadClickMock
  }

  const setup = props => shallow(<Keypad {...props} />)

  it('renders', () => {
    const wrapper = setup(props)
    expect(wrapper.exists()).toBe(true)
  })

  it('does not throw with correct props', () => {
    const propErrors = checkPropTypes(
      Keypad.propTypes,
      props,
      'prop',
      Keypad.name
    )

    expect(propErrors).toBeUndefined()
  })

  it('renders 10 keys', () => {
    const wrapper = setup(props)
    expect(wrapper.find('button').length).toBe(10)
  })

  it('renders a label', () => {
    const wrapper = setup(props)
    expect(wrapper.find('label').length).toBe(1)
    expect(wrapper.find('label').prop('for')).toBe(wrapper.find('select').prop('id'))
  })

  it('renders a select field with hrs / mins / secs', () => {
    const wrapper = setup(props)

    expect(wrapper.find('select').exists()).toBe(true)
    expect(wrapper.find('option').length).toBe(3)
    expect(wrapper.find('select').prop('id')).toBe(wrapper.find('label').prop('for'))

    expect(wrapper.find('option').at(0).prop('value')).toBe('hours')
    expect(wrapper.find('option').at(0).text()).toBe('hours')
  })

  it('can set the unit for the keypad', () => {
    const wrapper = setup(props)

    wrapper.find('select').simulate('change', { target: { value: 'seconds' } })

    expect(wrapper.state().unit).toBe('seconds')
  })

  it('updates the timer when a key is clicked', () => {
    const wrapper = setup(props).find('button').at(0)
    wrapper.simulate('click')
    expect(handleKeypadClickMock.mock.calls.length).toBe(1)
    expect(handleKeypadClickMock.mock.calls[0][0]).toBe(0)
  })
})
