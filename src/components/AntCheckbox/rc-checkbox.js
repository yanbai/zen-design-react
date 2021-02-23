import React from "react"
import "./index.scss"
import classNames from "classnames"

// prefixCls,
// className,

// disabled,
// defaultChecked

// value,
// onChange
// checked

export default class RcCheckbox extends React.Component {
  constructor(props) {
    super(props)

    const isChecked =
      "checked" in props
        ? props.checked
        : props.defaultChecked || false

    this.state = {
      isChecked,
    }
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

  handleChange = e => {
    const { disabled, onChange } = this.props

    if (disabled) return

    if (!("checked" in this.props)) {
      this.setState({
        isChecked: e.target.checked,
      })
    }

    if (onChange) {
      onChange({
        target: {
          ...this.props,
          checked: e.target.checked,
        },
        stopPropagation() {
          e.stopPropagation()
        },
        preventDefault() {
          e.preventDefault()
        },
        nativeEvent: e.nativeEvent,
      })
    }
  }

  render() {
    const {
      prefixCls,
      className,
      disabled,
      value,
      children,
      ...others
    } = this.props

    const globalProps = Object.keys(others).reduce(
      (acc, cur) => {
        if (
          cur.slice(0, 5) === "aria-" ||
          cur.slice(0, 5) === "data-" ||
          cur.slice(0, 5) === "role-"
        )
          acc[cur] = others[cur]
        return acc
      },
      {},
    )

    const { isChecked } = this.state

    const classString = classNames(prefixCls, className, {
      [`${prefixCls}-checked`]: isChecked,
      [`${prefixCls}-disabled`]: disabled,
    })

    return (
      <div className={classString}>
        <input
          className={`${prefixCls}-input`}
          type="checkbox"
          value={value || children}
          checked={isChecked}
          disabled={disabled}
          onChange={this.handleChange}
          // others={...others}
          {...globalProps}
        />
        <label>{children}</label>
      </div>
    )
  }
}
