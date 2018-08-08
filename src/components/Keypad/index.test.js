import React from 'react'
import { shallow } from 'enzyme'

import Keypad from './'

describe('Keypad', () => {

  const setup = props => shallow(<Keypad {...props} />)

  it('renders', () => {
    const wrapper = setup()
    expect(wrapper.exists()).toBe(true)
  })

  it('renders 10 keys', () => {
    const wrapper = setup()
    expect(wrapper.find('button').length).toBe(10)
  })

  it('renders a label', () => {
    const wrapper = setup()
    expect(wrapper.find('label').length).toBe(1)
    expect(wrapper.find('label').prop('for')).toBe(wrapper.find('select').prop('id'))
  })

  it('renders a select field with hrs / mins / secs', () => {
    const wrapper = setup()

    expect(wrapper.find('select').exists()).toBe(true)
    expect(wrapper.find('option').length).toBe(3)
    expect(wrapper.find('select').prop('id')).toBe(wrapper.find('label').prop('for'))

    expect(wrapper.find('option').at(0).prop('value')).toBe('hours')
    expect(wrapper.find('option').at(0).text()).toBe('hours')
  })

  it('can set the unit for the keypad', () => {
    const wrapper = setup()

    wrapper.find('select').simulate('change', { target: { value: 'seconds' } })

    expect(wrapper.state().unit).toBe('seconds')
  })
})
