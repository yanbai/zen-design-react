import React from 'react'
import './index.scss'
import classNames from 'classnames'
import PropTypes from 'prop-types'

class Autocomplete extends React.Component {
  constructor(props) {
    super(props)
    const {
      defaultValue
    } = props
    this.inputRef = React.createRef()
    this.inputCoverRef = React.createRef()
    this.autocompleteSelectedRef = React.createRef()
    this.listRef = React.createRef()

    this.state = {
      strInputValue: '',
      arrInputValue: defaultValue || [],
      currentInput: '',
      activeOptionIndex: -1
    }
  }

  // computedInternalOptions(options) {
  //   if (typeof options !== "undefined" && options.length > 0) {
  //     return options;
  //   } else {
  //     return standardOptions;
  //   }
  // }

  computedMatchedOptions(options, currentInput, shouldMatchCase) {
    if(currentInput === '') return []
    return options && options.length > 0 ? options.filter(item => {
      return !shouldMatchCase ? item.toLowerCase().includes(currentInput.toLowerCase()) : item.includes(currentInput)
    }) : []
  }

  highlightWord(word, string) {
    let index = word.toLowerCase().indexOf(string.toLowerCase())
    let part_one = word.slice(0, index)
    let part_two = word.slice(index, index + string.length)
    let part_three = word.slice(index + string.length)
    let _word = `${part_one}<em>${part_two}</em>${part_three}`
    return (<span dangerouslySetInnerHTML={{ __html: _word }} />)
  }

  componentDidMount() {
    this.renderInputStyle()
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if(this.state.strInputValue !== prevState.strInputValue) {
      this.renderInputStyle()
    }
  }

  handleAddOption(e, option, arrInputValue) {
    if(!option) return
    let newValue = arrInputValue.concat(option)
    this.setState({
      strInputValue: newValue.join('|'),
      arrInputValue: newValue,
      currentInput: '',
      activeOptionIndex: -1
    })
    this.inputCoverRef.current.focus()
    if(this.props.handleValueChanged) this.props.handleValueChanged(newValue)
  }

  handleCurrentInputChange(event) {
    this.setState({
      currentInput: event.target.value.trim(),
      activeOptionIndex: -1
    })
  }

  handleRemoveOption(e, arrInputValue, index) {
    arrInputValue.splice(index, 1)
    this.setState({
      strInputValue: arrInputValue.join('|'),
      arrInputValue: arrInputValue
    })
    this.inputCoverRef.current.focus()
    if(this.props.handleValueChanged) this.props.handleValueChanged(arrInputValue)
  }

  handleClickAutocomplete(event) {
    this.inputCoverRef.current.focus()
  }

  handleKeyDown(event, matchedOptions, activeOptionIndex, arrInputValue, currentInput) {
    let oldActiveOption = matchedOptions[activeOptionIndex]
    let processedActiveOptionIndex = -1
    switch(event.key) {
      case 'ArrowDown':
        if(activeOptionIndex === matchedOptions.length-1) {
          processedActiveOptionIndex = -1
        } else {
          processedActiveOptionIndex = activeOptionIndex
        }
        this.setState({
          activeOptionIndex: processedActiveOptionIndex + 1
        })
        this.renderList(processedActiveOptionIndex + 1, 'down')
        break
      case 'ArrowUp':
        if(activeOptionIndex === 0) {
          processedActiveOptionIndex = matchedOptions.length
        } else {
          processedActiveOptionIndex = activeOptionIndex
        }
        this.setState({
          activeOptionIndex: processedActiveOptionIndex - 1
        })
        this.renderList(processedActiveOptionIndex - 1, 'up')
        break
      case 'Enter':
        this.handleAddOption(event, oldActiveOption, arrInputValue)
        break
      case 'Backspace':
        if(currentInput.length > 0) return
        this.handleRemoveOption(event, arrInputValue, arrInputValue.length-1)
        this.setState({
          currentInput: '',
          activeOptionIndex: -1
        })
        break
      default:
        break
    }
  }

  renderInputStyle() {
    let container = this.autocompleteSelectedRef.current
    if(!container.querySelector('.autocomplete-chunk-item')) {
      this.inputCoverRef.current.style.paddingLeft = '16px'
      this.inputCoverRef.current.style.paddingTop = '14px'
    } else {
      let containerLeft = container.getBoundingClientRect().left
      let containerTop = container.getBoundingClientRect().top
      let lastItem = container.querySelector('.autocomplete-chunk-item:last-child')
      let lastItemRight = lastItem.getBoundingClientRect().right
      let lastItemTop = lastItem.getBoundingClientRect().top

      this.inputCoverRef.current.style.paddingLeft = lastItemRight - containerLeft + 2 + 'px'
      this.inputCoverRef.current.style.paddingTop = lastItemTop - containerTop + 5 + 'px'
    }
  }

  renderList(newActiveOptionIndex, direction) {
    if(!this.listRef.current) return
    if(direction === 'down') {
      let activeOption = this.listRef.current.querySelector(`li:nth-child(${newActiveOptionIndex+1})`)
      activeOption.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"})
    } else if(direction === 'up') {
      let activeOption = this.listRef.current.querySelector(`li:nth-child(${newActiveOptionIndex-1})`)
      activeOption.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"})
    }
  }

  render() {
    const {
      id,
      options,
      shouldMatchCase
    } = this.props
    const {
      strInputValue,
      currentInput,
      arrInputValue,
      activeOptionIndex
    } = this.state
    const listClass = classNames({
      [`autocomplete-list`]: true,
      [`${id}-list`]: true,
    })

    const matchedOptions = this.computedMatchedOptions(
      options,
      currentInput,
      shouldMatchCase
    )

    return (
      <div className="autocomplete">
        <div
          className="autocomplete-chunks"
          ref={this.autocompleteSelectedRef}
          onClick={e => this.handleClickAutocomplete(e)}
        >
        {arrInputValue.map((item, index) => (
          <div key={item} className="autocomplete-chunk-item">
            <i
              onClick={e => this.handleRemoveOption(e, arrInputValue, index)}
              className="far fa-times-circle"
            ></i>
            {item}
          </div>
        ))}
        </div>
        <input
          ref={this.inputRef}
          readOnly
          className="autocomplete-input"
          type="text"
          value={strInputValue}
          />
        <input
          ref={this.inputCoverRef}
          type="text"
          className="autocomplete-cover"
          placeholder="placeholder"
          value={currentInput}
          onChange={(e) => this.handleCurrentInputChange(e)}
          onKeyDown={(e) => this.handleKeyDown(e, matchedOptions, activeOptionIndex, arrInputValue, currentInput)}
        />
        {matchedOptions.length > 0 &&
          <ul
            className={listClass}
            ref={this.listRef}
          >
            {
              matchedOptions.map((item, index) => (
                <li
                  key={index}
                  className={(activeOptionIndex === index ? "active" : "")}
                  onClick={(e) => this.handleAddOption(e, item, arrInputValue)}
                >
                  {this.highlightWord(item, currentInput)}
                </li>
              ))
            }
          </ul>
        }
      </div>
    )
  }
}
Autocomplete.defaultProps = {
  shouldMatchCase: false
}

Autocomplete.propTypes = {
  defaultValue: PropTypes.array,
  options: PropTypes.array.isRequired,
  handleValueChanged: PropTypes.func
}
export default Autocomplete
