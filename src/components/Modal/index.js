import React from 'react'
import './index.scss'

function Modal(props) {
    return (
      <div>
        <div id="popup1" className="overlay zen-modal__overlay">
          <div className="zen-modal__popup">
            <div className="zen-modal__header">Please input info to filter results</div>
            <a className="zen-modal__close" href="#">&times;</a>
            <div className="zen-modal__content">
              {props.content}
            </div>
          </div>
        </div>
      </div>
    )
}

export default Modal
