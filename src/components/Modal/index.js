import React, {useContext} from 'react'
import style from './index.module.scss'
import classnames from 'classnames'
import { ThemeContext } from '../theme-context'

function Modal(props) {
  const theme = useContext(ThemeContext)
  const {
    isOpen,
    handleClose,
    content,
    header
  } = props

  const overlayClass = classnames({
    [`${style['theme-'+theme]}`]: true,
    [`${style.overlay}`]: true,
    [`${style.open}`]: isOpen
  })

  return (
    <div>
      <div className={overlayClass}>
        <div className={style.popup}>
          <div className={style.header}>{header}</div>
          <button className={style.close} onClick={handleClose}>&times;</button>
          <div className={style.content}>
            {content}
          </div>
        </div>
      </div>
    </div>
  )
}

Modal.contextType = ThemeContext

export default Modal
