import React from 'react'
import PropTypes from 'prop-types'

const styles = {
  controls: {
    running: {
      position: 'absolute',
      top: 0,
      zIndex: 1
    }
  }
}

const Controls = ({ handleStart, handleStop, handleReset, isRunning }) => 
  <div style={isRunning && styles.controls.running}>
    <button onClick={handleStart}>start</button>
    <button onClick={handleStop}>stop</button>
    <button onClick={handleReset}>reset</button>
  </div>

Controls.propTypes = {
  handleStart: PropTypes.func.isRequired,
  handleStop: PropTypes.func.isRequired,
  handleReset: PropTypes.func.isRequired
}

export default Controls
