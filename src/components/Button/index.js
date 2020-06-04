import React from 'react'
import './index.scss'
import Icon from '../Icon'

function Button(props) {
  const Component = props.href ? 'a' : 'button'
    const otherAttributes = Object.assign({}, {
      href: props.href,
      disabled: props.disabled
    })
    // const otherClasses = {

    // }
    const typeClass = props.type ? `zen-button--${props.type}` : ''
    const disabledClass = props.disabled ? 'zen-button--disabled' : ''
    const ghostClass = props.ghost ? 'zen-button--ghost' : ''
    const blockClass = props.block ? 'zen-button--block' : ''

    const className = `zen-button ${typeClass} ${disabledClass} ${ghostClass} ${blockClass}`

    const icon = props.icon ? <Icon name={props.icon} /> : null
    return (
      <Component className={className} {...otherAttributes}>{icon} props.children}</Component>
    )
}

export default Button
