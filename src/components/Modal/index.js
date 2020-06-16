import React from 'react'
import './index.scss'
import Collapse from '../Collapse'
import Checkbox from '../Checkbox'
import Button from '../Button'

const collapseContent_1 = (
  <div>
    <p className="column">blue</p>
    <p className="column">tomato</p>
    <p className="column">orange</p>
  </div>
)

const collapseContent_2 = (
  <div>
    <p className="column">shirts</p>
    <p className="column">pants</p>
    <p className="column">watches</p>
  </div>
)

function Modal(props) {
    return (
      <div>
        <div id="popup1" class="overlay zen-modal__overlay">
          <div class="zen-modal__popup">
            <div className="zen-modal__header">Please input info to filter results</div>
            <a class="zen-modal__close" href="#">&times;</a>
            <div class="zen-modal__content">
              {props.content}
            </div>
          </div>
        </div>
      </div>
    )
}

export default Modal
