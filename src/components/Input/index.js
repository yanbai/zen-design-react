import React from 'react'
import style from './index.module.scss'
import classnames from 'classnames'
import errorHandler from '../../hoc/errorHandler'

const Input = React.forwardRef((props, ref) => {
  const {
    disabled,
    label,
    isError,
    errorMessage,
    ...others
  } = props

  const inputClass = classnames({
    [`${style.input}`]: true,
    [`${style.disabled}`]: disabled
  })

  const containerClass = classnames({
    'form-group': true,
    [`${style.error}`]: isError
  })
  return (
    <div className={containerClass}>
      <label className={style.label}>{label}</label>
      <input
        type="text"
        className = { inputClass }
        ref={ref}
        disabled={ disabled }
        { ...others }
      />
      <div className={style['error-message']}>{errorMessage}</div>
    </div>
  )
})

export default errorHandler(Input)
