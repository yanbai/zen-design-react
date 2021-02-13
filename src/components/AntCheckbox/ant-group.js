import React from "react"
import AntCheckbox from "./checkbox"
import "./index.scss"

export default class AntCheckboxGroup extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: props.value || props.defaultValue || [],
    }
  }

  static getDerivedStateFromProps(props, state) {
    // if ("value" in props || "defaultValue" in props)
    //   return {
    //     ...state,
    //     value: props.value || props.defaultValue,
    //   }
    return null
  }

  emitChange(option) {
    const { value } = this.state
    const { onChange } = this.props
    const optionIndex = value.indexOf(option.value)

    const newValue = [...value]

    if (optionIndex === -1) {
      newValue.push(option.value)
    } else {
      newValue.splice(optionIndex, 1)
    }

    this.setState({
      value: newValue,
    })

    if (onChange) {
      onChange(newValue)
    }
  }

  render() {
    const {
      defaultValue,
      // children,
      options = [],
      // className,
      // style,
      onChange,
      ...others
    } = this.props

    const getOptions = () =>
      options.map(option => {
        if (typeof option === "string") {
          return {
            label: option,
            value: option,
          }
        }
        return option
      })

    return getOptions().map(option => (
      <AntCheckbox
        onChange={e => this.emitChange(option)}
        key={option.value}
        checked={this.state.value.includes(option.value)}
        value={option.value}
      >
        {option.label}
      </AntCheckbox>
    ))
  }
}
