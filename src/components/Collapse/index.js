import React from 'react'
import Icon from '../Icon'
import './index.scss'
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
      'zen-collapse__item': true,
      'zen-collapse__item--expanded': this.state.isExpanded
    })
    return (
      <div className="zen-collapse">
        <div className={ itemClass }>
          <div className="zen-collapse__header" onClick={this.handleToggle}>
            <Icon name='chevron-down' className="zen-collapse__icon" />
            <span>{this.props.header}</span>
          </div>
          <div className="zen-collapse__content-outer">
            <div className="zen-collapse__content-inner">
              {this.props.content}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Collapse
