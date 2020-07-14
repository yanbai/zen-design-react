import React, {useContext} from 'react'
import style from './index.module.scss'
import classnames from 'classnames'
import errorHandler from 'src/hoc/errorHandler'
import { ThemeContext } from '../theme-context'

const Input = React.forwardRef((props, ref) => {
  const theme = useContext(ThemeContext)
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
    [`${style['form-group']}`]: true,
    [`${style['theme-'+theme]}`]: true,
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
        autoComplete="off"
      />
      <div className={style['error-message']}>{errorMessage}</div>
    </div>
  )
})

Input.contextType = ThemeContext
export default errorHandler(Input)
