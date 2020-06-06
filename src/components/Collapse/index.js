import React from 'react'
import Icon from '../Icon'
import './index.scss'

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
    const itemClass = this.state.isExpanded ? 'zen-collapse__item--expanded' : ''
    return (
      <div className="zen-collapse">
        <div className={ 'zen-collapse__item ' + itemClass }>
          <div className="zen-collapse__header" onClick={this.handleToggle}>
            <Icon name='chevron-down' className="zen-collapse__icon" />
            <span>{this.props.header}</span>
          </div>
          <div className="zen-collapse__content">
            {this.props.content}
          </div>
        </div>
      </div>
    )
  }
}

export default Collapse
