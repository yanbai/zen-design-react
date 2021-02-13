import React from "react"
import AntCheckbox from "./checkbox"
import "./index.scss"

export default class AntCheckboxGroup extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      checked: [],
    }
  }

  static getDerivedStateFromProps(props, state) {
    if ("defaultValue" in props)
      return {
        ...state,
        checked: props.defaultValue,
      }
    return null
  }

  emitChange(e) {
    console.log(e)
    const checkedClone = JSON.parse(
      JSON.stringify(this.state.checked),
    )
    if (
      e.target.checked &&
      !checkedClone.includes(e.target.value)
    ) {
      checkedClone.push(e.target.value)
    } else if (
      !e.target.checked &&
      checkedClone.includes(e.target.value)
    ) {
      const pos = checkedClone.indexOf(e.target.value)
      checkedClone.splice(pos, 1)
    }
    // debugger
    this.setState({
      checked: checkedClone,
    })
    if ("onChange" in this.props) this.props.onChange(e)
  }

  render() {
    const {
      options,
      onChange,
      defaultValue,
      ...others
    } = this.props

    return options.map(item => (
      <AntCheckbox
        onChange={e => this.emitChange(e)}
        key={item}
        checked={this.state.checked.includes(item)}
      >
        {item}
      </AntCheckbox>
    ))
  }
}
