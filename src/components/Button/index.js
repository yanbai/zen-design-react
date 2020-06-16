import React from 'react'
import './index.scss'
import Icon from '../Icon'
import classNames from 'classnames'

function Button(props) {
  const Component = props.href ? 'a' : 'button'
  const otherAttributes = Object.assign({}, {
    href: props.href,
    disabled: props.disabled,
  })
  const buttonClass = classNames({
    'zen-button': true,
    [`zen-button--${props.type}`]: props.type,
    'zen-button--disabled': props.disabled,
    'zen-button--ghost': props.ghost,
    'zen-button--block': props.block
  })

  const icon = props.icon ? <Icon name={props.icon} /> : null
  return (
    <Component className={buttonClass} {...otherAttributes}>{icon} {props.children}</Component>
  )
}

export default Button
