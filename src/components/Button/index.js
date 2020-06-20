import React from 'react'
import './index.scss'
import Icon from '../Icon'
import classNames from 'classnames'

class Button extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    e.preventDefault()
    this.props.onClick()
  }

  render() {
    const Component = this.props.href ? 'a' : 'button'
    const {
      type,
      disabled,
      ghost,
      block,
      onClick
    } = this.props

    const otherAttributes = Object.assign({}, {
      href: this.props.href,
      disabled: this.props.disabled,
    })
    const buttonClass = classNames({
      'zen-button': true,
      [`zen-button--${type}`]: type,
      'zen-button--disabled': disabled,
      'zen-button--ghost': ghost,
      'zen-button--block': block
    })

    const icon = this.props.icon ? <Icon name={this.props.icon} /> : null
    return (
      <Component
        onClick={this.handleClick}
        className={buttonClass}
        {...otherAttributes}
      >
        {icon} {this.props.children}
      </Component>
    )
  }
}

export default Button
