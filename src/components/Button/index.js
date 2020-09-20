import React from 'react'
import style from './index.module.scss'
import Icon from '../Icon'
import classNames from 'classnames'
import { ThemeContext } from '../theme-context'

class Button extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const theme = this.context
    const {
      level,
      ghost,
      block,
      iconType,
      ...rest
    } = this.props
    const Component = this.props.href ? 'a' : 'button'
    const buttonClass = classNames({
      [`${style['theme-'+theme]}`]: true,
      [`${style.button}`]: true,
      [`${style[level]}`]: level,
      [`${style.disabled}`]: this.props.disabled,
      [`${style.ghost}`]: ghost,
      [`${style.block}`]: block
    })

    const icon = this.props.icon ? <Icon name={this.props.icon} type={this.props.iconType} /> : null
    return (
      <Component
        className={buttonClass}
        {...rest}
      >
        {icon} {this.props.children}
      </Component>
    )
  }
}

Button.contextType = ThemeContext

export default Button
