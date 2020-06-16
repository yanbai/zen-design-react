import React from 'react'
import './index.scss'
import PropTypes from 'prop-types'
import onClickOutside from 'react-onclickoutside'
import Icon from '../Icon'
import find from 'lodash/find'
import classNames from 'classnames'

class ZenSelect extends React.Component {
  constructor(props) {
    super(props)
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
    if(!this.props.disabled) {
      this.setState({
        isExpanded: !this.state.isExpanded
      })
    }
  }

  handleSelected(value, label) {
    this.props.handleChanged(value, label)
    this.setState({
      isExpanded: false
    })
  }

  showDisplayName(selectedValue) {
    let selectedOb = find(this.props.options, item => item.value === selectedValue)
    return selectedOb['label']
  }

  render() {
    const {
      options,
      value,
      name,
      disabled
    } = this.props

    const selectClass = classNames({
      'zen-select__container': true,
      'zen-select__container--expanded': this.state.isExpanded,
      'zen-select__container--disabled': disabled
    })

    return (
      <div className={selectClass}>
        <input type="hidden" name={name} value={value} />
        <div className="zen-select__title-outer" onClick={() => this.handleToggle()}>
          <div className="zen-select__title-inner">
            <span>{this.showDisplayName(value)}</span>
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
                onClick={() => this.handleSelected(item.value, item.label)}
              >{item.label}</li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

ZenSelect.propTypes = {
  handleChanged: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string,
  options: PropTypes.arrayOf(function(propValue, key, componentName, location, propFullName) {
    if(!propValue[key].hasOwnProperty('value') || !propValue[key].hasOwnProperty('label')) {
      return new Error(
        'Invalid prop `' + propFullName + '` supplied to' +
        ' `' + componentName + '`. Validation failed.'
      )
    }
  })
}

export default onClickOutside(ZenSelect)
