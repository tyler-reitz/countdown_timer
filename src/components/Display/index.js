import React from 'react'
import PropTypes from 'prop-types'
import prettyMs from 'pretty-ms'

const styles = {
  running: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red'
  }
}

const Display = ({ currentTime, isRunning }) => 
  <div style={isRunning && styles.running}>
    <h1>{prettyMs(currentTime)}</h1>
  </div>

Display.propTypes = {
  currentTime: PropTypes.number.isRequired
}

export default Display
