import React, { Component } from "react"
import PropTypes from "prop-types"

const styles = {
  container: {
    maxWidth: 400,
    margin: "auto"
  },
  keypad: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    marginBottom: "1rem"
  },
  keys: {
    flexBasis: '30%',
    margin: '.25rem'
  }
}

class Keypad extends Component {
  state = {
    activeUnit: "minutes",
    seconds: 1000,
    minutes: 60000,
    hours: 3600000
  }

  handleSelect = evt => this.setState({ activeUnit: evt.target.value })

  render() {
    const { activeUnit } = this.state
    return (
      <div style={styles.container}>
        <div style={styles.keypad}>
          {Array(10)
            .fill(null)
            .map((_, idx) => (
              <button
                onClick={() =>
                  this.props.handleKeypadClick({ [activeUnit]: idx })
                }
                style={{ ...styles.keys, order: idx === 0 ? 'initial' : -1 }}
                key={idx}
              >
                {idx}
              </button>
            ))}
        </div>

        <label for="timer-units">Units: </label>
        <select
          onChange={this.handleSelect}
          id="timer-units"
          name="timer-units"
        >
          {["hours", "minutes", "seconds"].map(unit => (
            <option
              key={unit}
              value={unit}
              selected={unit === this.state.activeUnit}
            >
              {unit}
            </option>
          ))}
        </select>

      </div>
    )
  }
}

Keypad.propTypes = {
  handleKeypadClick: PropTypes.func.isRequired
}

export default Keypad
