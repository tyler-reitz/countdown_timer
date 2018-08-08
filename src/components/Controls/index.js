import React from 'react'
import PropTypes from 'prop-types'

const Controls = ({ handleStart, handleStop, handleReset }) => <div>
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
