import React from 'react'
import './index.scss'
import classnames from 'classnames'

function Modal(props) {
  const {
    isOpen,
    handleClose
  } = props

  const overlayClass = classnames({
    'zen-modal__overlay': true,
    'zen-modal__overlay--open': isOpen
  })

  return (
    <div>
      <div className={overlayClass}>
        <div className="zen-modal__popup">
          <div className="zen-modal__header">Please input info to filter results</div>
          <button className="zen-modal__close" onClick={handleClose}>&times;</button>
          <div className="zen-modal__content">
            {props.content}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
