import React from 'react'
import './index.scss'
import classnames from 'classnames'

function ZenInput(props) {
  const {
    disabled,
    ...others
  } = props

  const inputClass = classnames({
    'zen-input': true,
    'zen-input--disabled': disabled
  })
  return (
    <input
      type="text"
      disabled={ disabled }
      { ...others }
      className = { inputClass }
    />
  )
}

export default ZenInput
