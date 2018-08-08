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
})
