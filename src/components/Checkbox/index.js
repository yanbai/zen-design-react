import React from 'react'
import './index.scss'
import PropTypes from 'prop-types'

class ZenCheckbox extends React.Component {
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
      label,
      id,
      checked,
      handleChanged,
      ...others
    } = this.props

    return (
      <>
        <div className="zen-checkbox">
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

ZenCheckbox.propTypes = {
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
}

export default ZenCheckbox
