import React from "react"
import AntCheckbox from "./ant-checkbox"

import "./index.scss"

export const GroupContext = React.createContext()

export default class AntCheckboxGroup extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: props.value || props.defaultValue || [],
    }
  }

  toggleOption(option) {
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
    const { options = [], onChange, ...others } = this.props

    const { value } = this.state

    const context = {
      toggleOption: option => this.toggleOption(option),
      value,
      disabled: others.disabled,
      name: others.name,
    }

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

    return (
      <GroupContext.Provider value={context}>
        {getOptions().map(option => (
          <AntCheckbox
            key={option.value}
            disabled={
              "disabled" in option
                ? option.disabled
                : others.disabled
            }
            value={option.value}
            checked={this.state.value.includes(
              option.value,
            )}
            onChange={option.onChange}
          >
            {option.label}
          </AntCheckbox>
        ))}
      </GroupContext.Provider>
    )
  }
}
