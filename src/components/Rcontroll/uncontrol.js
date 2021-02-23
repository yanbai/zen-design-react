import React from "react"

export default class Uncontrol extends React.Component {
  state = {
    checked:
      "checked" in this.props ? this.props.checked : false,
  }
  handleChange = e => {
    this.setState({
      checked: e.target.checked,
    })
  }
  render() {
    const { checked } = this.state
    return (
      <div>
        <label>uncontrol: </label>
        <input
          type="checkbox"
          value={checked}
          onChange={this.handleChange}
        />
      </div>
    )
  }
}
