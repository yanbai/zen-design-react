import React from 'react'
import style from './index.module.scss'
import classnames from 'classnames'

function Input(props) {
  const {
    disabled,
    ...others
  } = props

  const inputClass = classnames({
    [`${style.input}`]: true,
    [`${style.disabled}`]: disabled
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

export default Input
