import React from 'react'
import style from './index.module.scss'
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
      [`${style.radio}`]: true,
      [`${style.disabled}`]: disabled
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
        <div className={style.check}></div>
      </span>
    )
  }
}

export default ZenRadio
