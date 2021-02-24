import React from "react"
import "./index.scss"
import classnames from "classnames"
import { GroupContext } from "./ant-group"

class AntRadio extends React.Component {
  state = {
    isChecked:
      "checked" in this.props
        ? this.props.checked
        : this.props.defaultChecked || false,
  }
  static getDerivedStateFromProps(props, state) {
    if ("checked" in props) {
      return {
        ...state,
        isChecked: props.checked,
      }
    }
    return null
  }
  render() {
    const {
      id,
      name,
      checked,
      value,
      onChange,

      className,
      style,

      children,
      ...others
    } = this.props

    const radioProps = {
      id,
      name,
      checked,
      value,
      onChange,
      ...others,
    }
    // value default value is children
    radioProps.value = value || children
    // id default value is value
    radioProps.id = id || value

    return (
      <GroupContext.Consumer>
        {(radioGroup) => {
          // name can use group name
          if (radioGroup && radioGroup.name)
            radioProps.name = radioGroup.name
          // onChange can emit group onChange
          if (radioGroup && radioGroup.onChange) {
            radioProps.onChange = (e) => {
              onChange(e)
              radioGroup.onChange(e)
            }
          }
          return (
            <span className="radio">
              <input type="radio" {...radioProps} />
              <label htmlFor={id}>{children}</label>
              <div className={"check"}></div>
            </span>
          )
        }}
      </GroupContext.Consumer>
    )
  }
}

export default AntRadio
