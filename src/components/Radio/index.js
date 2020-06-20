import React from 'react'
import './index.scss'
import classnames from 'classnames'

class ZenRadio extends React.Component {
  constructor(props) {
    super(props)
    this.handleToggle = this.handleToggle.bind(this)
  }

  handleToggle(event) {
    if(!this.props.disabled && this.props.handleChanged) {
      this.props.handleChanged(event)
    }
  }

  render() {
    const {
      disabled,
      label,
      id,
      checked,
      handleChanged,
      ...others
    } = this.props

    const radioClass = classnames({
      'zen-radio': true,
      'zen-radio--disabled': disabled
    })
    return (
      <span className={radioClass}>
        <input
          type="radio"
          id={id}
          {...others}
          checked={checked}
          onChange={this.handleToggle}
        />
        <label htmlFor={id}>{label}</label>
        <div className="check"></div>
      </span>
    )
  }
}

export default ZenRadio
