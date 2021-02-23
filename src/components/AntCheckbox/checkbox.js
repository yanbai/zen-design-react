import React from "react"
import "./index.scss"

// onChange
// defaultChecked
// checked

export default class AntCheckbox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isChecked:
        typeof this.props.defaultChecked === "undefined"
          ? false
          : this.props.defaultChecked,
    }
  }

  static getDerivedStateFromProps(props, state) {
    if ("checked" in props)
      return {
        ...state,
        isChecked: props.checked,
      }
    return null
  }

  handleChange(e) {
    if (!("checked" in this.props))
      this.setState({ isChecked: e.target.checked })
    if ("onChange" in this.props) this.props.onChange(e)
  }

  render() {
    const { children, disabled, ...others } = this.props
    return (
      <div>
        <input
          type="checkbox"
          value={this.props.children}
          checked={this.state.isChecked}
          disabled={disabled}
          onChange={e => this.handleChange(e)}
          // others={...others}
        />
        <label>{this.props.children}</label>
      </div>
    )
  }
}
