import React from 'react'
import './index.scss'
function ZenInput(props) {
  return (
    <input name="name" type="text" class="validate[required,custom[onlyLetter],length[0,100]] zen-input" placeholder="Name" id="name" />
  )
}

export default ZenInput
