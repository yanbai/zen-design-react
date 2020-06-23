import React from 'react'
import style from './index.module.scss'
import classnames from 'classnames'

function Modal(props) {
  const {
    isOpen,
    handleClose
  } = props

  const overlayClass = classnames({
    [`${style.overlay}`]: true,
    [`${style.open}`]: isOpen
  })

  return (
    <div>
      <div className={overlayClass}>
        <div className={style.popup}>
          <div className={style.header}>Please input info to filter results</div>
          <button className={style.close} onClick={handleClose}>&times;</button>
          <div className={style.content}>
            {props.content}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
