import React from 'react'
import style from './index.module.scss'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { ThemeContext } from '../theme-context'

class Checkbox extends React.Component {
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
    let theme = this.context
    const {
      label,
      id,
      checked,
      handleChanged,
      ...others
    } = this.props
    const classes = classNames({
      [`${style['theme-'+theme]}`]: true,
      [`${style.checkbox}`]: true,
    })

    return (
      <>
        <div className={classes}>
          <input
            {...others}
            type="checkbox"
            id={id}
            checked={checked}
            onChange={this.handleToggle}
          />
          <label htmlFor={id}><span>{label}</span></label>
        </div>
      </>
    )
  }
}

Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
}
Checkbox.contextType = ThemeContext
export default Checkbox
