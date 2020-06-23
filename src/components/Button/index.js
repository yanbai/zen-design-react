import React from 'react'
import style from './index.module.scss'
import Icon from '../Icon'
import classNames from 'classnames'

class Button extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
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
      [`${style.button}`]: true,
      [`${style[level]}`]: level,
      [`${style.disabled}`]: this.props.disabled,
      [`${style.ghost}`]: ghost,
      [`${style.block}`]: block
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
