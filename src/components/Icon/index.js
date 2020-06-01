import React from 'react'
import './index.scss'

function Icon(props) {
  let { name, ...other } = props
  let propsClass = ''
  if ('className' in other) {
    propsClass = other.className
    delete other.className
  }
  return (
    <i className={'fas fa-' + name + ' ' + propsClass} {...other}></i>
  )
}

export default Icon
