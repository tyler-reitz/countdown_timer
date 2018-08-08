import React from 'react'
import PropTypes from 'prop-types'
import prettyMs from 'pretty-ms'

const Display = ({ currentTime }) => <div>
    <h1>{prettyMs(currentTime)}</h1>
  </div>

Display.propTypes = {
  currentTime: PropTypes.number.isRequired
}

export default Display
