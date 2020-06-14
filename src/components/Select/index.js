import React from 'react'
import './index.scss'
import PropTypes from 'prop-types'
import onClickOutside from 'react-onclickoutside'
import Icon from '../Icon'

class ZenSelect extends React.Component {
  constructor(props) {
    super(props)
    this.handleToggle = this.handleToggle.bind(this)
    this.state = {
      isExpanded: false
    }
  }

  handleClickOutside() {
    this.setState({
      isExpanded: false
    })
  }

  handleToggle() {
    this.setState({
      isExpanded: !this.state.isExpanded
    })
  }

  render() {
    const {
      options,
      value,
      handleChanged
    } = this.props

    const expandedClass = this.state.isExpanded ? 'zen-select__container--expanded' : ''
    return (
      <div className={ 'zen-select__container ' + expandedClass }>
        <div className="zen-select__title-outer zen-select__title--single" onClick={this.handleToggle}>
          <div className="zen-select__title-inner">
            <span>{value}</span>
            <Icon name='chevron-down' className="zen-select__arrow" />
          </div>
        </div>
        <div className="zen-select__dropdown-container">
          <ul className="zen-select__dropdown-list">
            {options.map(item => (
              <li
                className={'zen-select__dropdown-item ' + (item.value === value ? 'zen-select__dropdown-item--selected' : '')}
                key={item.value}
                id={item.value}
                onClick={() => handleChanged(item.value, item.label)}
              >{item.label}</li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

ZenSelect.propTypes = {
  handleChanged: PropTypes.func.isRequired
}

export default onClickOutside(ZenSelect)
