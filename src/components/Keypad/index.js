import React, { Component } from "react"
import PropTypes from "prop-types"

class Keypad extends Component {
  handleSelect = evt => this.setState({ unit: evt.target.value })

  render() {
    return (
      <div>
        <label for="timer-units">Units: </label>
        <select
          onChange={this.handleSelect}
          id="timer-units"
          name="timer-units"
        >
          {["hours", "minutes", "seconds"].map(unit => (
            <option key={unit} value={unit}>
              {unit}
            </option>
          ))}
        </select>

        {Array(10)
          .fill(null)
          .map((_, idx) => (
            <button onClick={() => this.props.handleKeypadClick(idx)} key={idx}>
              {idx}
            </button>
          ))}
      </div>
    )
  }
}

Keypad.propTypes = {
  handleKeypadClick: PropTypes.func.isRequired
}

export default Keypad
