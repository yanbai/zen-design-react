import React from "react"
import "./index.scss"

// onChange
// checked
// defaultChecked
// autoFocus
// indeterminate
export default class AntCheckbox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isChecked: false,
    }
  }

  handleChange(e) {
    this.setState({ isChecked: !this.state.isChecked })
    this.props.onChange(e)
  }

  render() {
    return (
      <div>
        <input
          onChange={e=>this.handleChange(e)}
          type="checkbox"
          checked={this.state.isChecked}
        />
        <label>Label</label>
      </div>
    )
  }
}
