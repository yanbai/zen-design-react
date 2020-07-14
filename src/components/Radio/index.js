import React from 'react'
import style from './index.module.scss'
import classnames from 'classnames'
import { ThemeContext } from '../theme-context'

class Radio extends React.Component {
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
    const theme = this.context
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
      [`${style['theme-'+theme]}`]: true,
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
Radio.contextType = ThemeContext

export default Radio
