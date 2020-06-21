import React from 'react'
import './index.scss'
import Icon from '../Icon'
import classNames from 'classnames'

class Button extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {
      level,
      ghost,
      block,
      ...passThroughProps
    } = this.props
    const Component = this.props.href ? 'a' : 'button'

    const buttonClass = classNames({
      'zen-button': true,
      [`zen-button--${level}`]: level,
      'zen-button--disabled': this.props.disabled,
      'zen-button--ghost': ghost,
      'zen-button--block': block
    })

    const icon = this.props.icon ? <Icon name={this.props.icon} /> : null
    return (
      <Component
        className={buttonClass}
        {...passThroughProps}
      >
        {icon} {this.props.children}
      </Component>
    )
  }
}

export default Button
