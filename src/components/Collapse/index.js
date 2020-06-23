import React from 'react'
import Icon from '../Icon'
import style from './index.module.scss'
import classNames from 'classnames'

class Collapse extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isExpanded: false
    }
    this.handleToggle = this.handleToggle.bind(this)
  }
  handleToggle() {
    this.setState({
      isExpanded: !this.state.isExpanded
    })
  }
  render() {
    const itemClass = classNames({
      [`${style.item}`]: true,
      [`${style.expanded}`]: this.state.isExpanded
    })
    return (
      <div className={style.collapse}>
        <div className={itemClass}>
          <div className={style.header} onClick={this.handleToggle}>
            <Icon name='chevron-down' className={style.icon} />
            <span>{this.props.header}</span>
          </div>
          <div className={style['content-outer']}>
            <div className={style['content-inner']}>
              {this.props.content}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Collapse
