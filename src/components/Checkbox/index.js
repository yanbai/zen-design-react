import React from 'react'
import './index.scss'
import PropTypes from 'prop-types'

class ZenCheckbox extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {
      label,
      checked,
      handleChanged,
      id,
      name,
      disabled
    } = this.props
    return (
      <>
        <div className="zen-checkbox">
          <input
            name={name}
            id={id}
            type="checkbox"
            checked={checked}
            disabled={disabled}
            onChange={(e) => handleChanged(checked, e)}
          />
          <label htmlFor={id}><span>{label}</span></label>
        </div>
      </>
    )
  }
}

ZenCheckbox.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  // checked: PropTypes.bool.isRequired,
  // handleChanged: PropTypes.func.isRequired
}

export default ZenCheckbox
