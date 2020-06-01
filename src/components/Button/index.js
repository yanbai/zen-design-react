import React from 'react'
import './index.css'
import Icon from '../Icon'

class Button extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const Component = this.props.href ? 'a' : 'button'
    const otherAttributes = Object.assign({}, {
      href: this.props.href,
      disabled: this.props.disabled
    })
    // const otherClasses = {

    // }
    const disabledClass = this.props.disabled ? 'zen-button--disabled' : ''
    const ghostClass = this.props.ghost ? 'zen-button--ghost' : ''
    const blockClass = this.props.block ? 'zen-button--block' : ''
    const className = `zen-button zen-button--primary ${disabledClass} ${ghostClass} ${blockClass}`

    const icon = this.props.icon ? <Icon name={this.props.icon} /> : null
    return (
      <Component className={className} {...otherAttributes}>{icon} {this.props.children}</Component>
    )
  }
}

export default Button
