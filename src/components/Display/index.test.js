import React from 'react'
import { shallow } from 'enzyme'
import checkPropTypes from 'check-prop-types'
import prettyMs from 'pretty-ms'

import Display from './'

describe('Display', () => {

  const setup = props => shallow(<Display {...props} />)

  const props = { currentTime: 111111 }

  it('renders', () => {
    const wrapper = setup(props)
    expect(wrapper.length).toBe(1)
  })

  it('does not throw with correct props', () => {
    const result = checkPropTypes(
      Display.propTypes,
      props,
      'prop',
      Display.name
    )

    expect(result).toBeUndefined()
  })

  it('displays the time', () => {
    const wrapper = setup(props)
    expect(wrapper.find('h1').text()).toBe(prettyMs(props.currentTime))
  })
})
