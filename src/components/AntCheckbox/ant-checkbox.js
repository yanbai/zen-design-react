import React from "react"
import "./index.scss"
import classNames from "classnames"
import { GroupContext } from "./ant-group"
import RcCheckbox from "./rc-checkbox"

// prefixCls = "ant-",
// className,

// children,
// style,
export default class AntCheckbox extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {
      prefixCls = "ant-",
      className,
      style,
      children,
      ...restProps
    } = this.props
    const checkboxProps = { ...restProps }

    return (
      <GroupContext.Consumer>
        {checkboxGroup => {
          if (checkboxGroup) {
            checkboxProps.onChange = (...args) => {
              if (restProps.onChange)
                restProps.onChange(...args)
              if (checkboxGroup.toggleOption)
                checkboxGroup.toggleOption({
                  label: children,
                  value:
                    checkboxProps.value ||
                    checkboxProps.children,
                })
            }
            checkboxProps.name = checkboxGroup.name
            checkboxProps.checked = checkboxGroup.value.includes(
              checkboxProps.value,
            )
            checkboxProps.disabled =
              checkboxProps.disabled ||
              checkboxGroup.disabled
          }

          const classString = classNames(
            {
              [`${prefixCls}-wrapper`]: true,
              [`${prefixCls}-wrapper-disabled`]: checkboxProps.disabled,
            },
            className,
          )

          return (
            <div className={classString} style={style}>
              <RcCheckbox {...checkboxProps}>
                {children}
              </RcCheckbox>
            </div>
          )
        }}
      </GroupContext.Consumer>
    )
  }
}
