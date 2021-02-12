import React from "react"
import "./index.scss"

// onChange
// defaultChecked
// checked
// autoFocus
// indeterminate
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

  // static getStaticStateFromProps(props, state) {
  //   if (typeof props.checked === "undefined")
  //     return {
  //       ...state,
  //       isChecked: props.isChecked,
  //     }
  //   return null
  // }

  handleChange(e) {
    this.setState({ isChecked: !this.state.isChecked })
    this.props.onChange(e)
  }

  render() {
    const { children, disabled, ...others } = this.props
    return (
      <div>
        <input
          onChange={e => this.handleChange(e)}
          type="checkbox"
          disabled={disabled}
          checked={this.state.isChecked}
        />
        <label>{this.props.children}</label>
      </div>
    )
  }
}
