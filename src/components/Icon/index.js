import React from 'react'
import './index.scss'

function Icon(props) {
  let { name, type, className } = props
  const typeMapping = {
    solid: 'fas',
    regular: 'far',
    light: 'fal',
    duotone: 'fad',
    brands: 'fab'
  }
  let propsClass = `${typeMapping[type]} fa-${name} ${className}`

  return (
    <i className={propsClass} />
  )
}

Icon.defaultProps = {
  type: 'solid'
}

export default Icon
