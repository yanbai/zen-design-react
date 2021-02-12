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
      checked: false,
    }
  }

  handleToggle(e) {
    this.setState({
      checked: e.target.checked
    })
    this.props.onChange(e)
  }
  render() {
    const { children, ...others } = this.props
    return (
      <div className="checkbox">
        <input
          type="checkbox"
          onChange={e=>this.handleToggle(e)}
          checked={this.state.checked}
        />
        <label>
          <span>{children}</span>
        </label>
      </div>
    )
  }
}
