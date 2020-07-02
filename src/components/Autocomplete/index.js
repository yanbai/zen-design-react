import React from 'react'
import './index.scss'
import classNames from 'classnames'
const standardOptions = [
	"Matthias Sammer",
	"Ronaldo",
	"Alan Shearer",
	"Predrag Mijatović",
	"Zinedine Zidane",
	"Davor Šuker",
	"Rivaldo",
	"David Beckham",
	"Andriy Shevchenko",
	"Luís Figo",
	"Michael Owen",
	"Raúl",
	"Oliver Kahn",
	"Roberto Carlos",
	"Pavel Nedvěd",
	"Thierry Henry",
	"Paolo Maldini",
	"Deco",
	"Ronaldinho",
	"Frank Lampard",
	"Steven Gerrard",
  "Fabio Cannavaro",
  "Gianluigi Buffon",
  "Cristiano Ronaldo",
  "Lionel Messi",
  "Fernando Torres",
  "Xavi",
  "Andrés Iniesta",
  "Franck Ribéry",
  "Manuel Neuer",
  "Neymar",
  "Antoine Griezmann",
  "Luka Modrić",
  "Virgil van Dijk"
];
class Autocomplete extends React.Component {
  constructor(props) {
    super(props)
    this.inputRef = React.createRef()
    this.inputCoverRef = React.createRef()
    this.autocompleteSelectedRef = React.createRef()
    this.state = {
      strInputValue: '',
      arrInputValue: [],
      activeInput: '',
      activeOption: ''
    }
  }

  static defaultProps = {
    shouldMatchCase: false
  }

  computedInternalOptions(options) {
    if (typeof options !== "undefined" && options.length > 0) {
      return options;
    } else {
      return standardOptions;
    }
  }

  computedMatchedOptions(options, activeInput, shouldMatchCase) {
    if(activeInput === '') return []
    return options && options.length > 0 ? options.filter(item => {
      return !shouldMatchCase ? item.toLowerCase().includes(activeInput.toLowerCase()) : item.includes(activeInput)
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
      activeInput: '',
      activeOption: ''
    })
    this.inputCoverRef.current.focus()
  }

  handleActiveInputChange(event) {
    this.setState({
      activeInput: event.target.value.trim(),
      activeOption: ''
    })
  }

  handleRemoveOption(e, arrInputValue, index) {
    arrInputValue.splice(index, 1)
    this.setState({
      strInputValue: arrInputValue.join('|'),
      arrInputValue: arrInputValue
    })
    this.inputCoverRef.current.focus()
  }

  handleKeyDown(event, matchedOptions, activeOption, arrInputValue, activeInput) {
    let activeIndex = activeOption ? matchedOptions.findIndex(item => item === activeOption) : -1
    let _activeOption
    switch(event.key) {
      case 'ArrowDown':
        if(activeIndex === matchedOptions.length-1) activeIndex = -1
        _activeOption = matchedOptions[activeIndex + 1]
        this.setState({
          activeOption: _activeOption
        })
        break
      case 'ArrowUp':
        if(activeIndex === 0) activeIndex = matchedOptions.length
        _activeOption = matchedOptions[activeIndex - 1]
        this.setState({
          activeOption: _activeOption
        })
        break
      case 'Enter':
        this.handleAddOption(event, activeOption, arrInputValue)
        break
      case 'Backspace':
        if(activeInput.length > 0) return
        this.handleRemoveOption(event, arrInputValue, arrInputValue.length-1)
        this.setState({
          activeInput: '',
          activeOption: ''
        })
        break
      default:
        break
    }
  }

  renderInputStyle() {
    let container = this.autocompleteSelectedRef.current
    if(!container.querySelector('.autocomplete-seleted-item')) {
      this.inputCoverRef.current.style.paddingLeft = '16px'
      this.inputCoverRef.current.style.paddingTop = '14px'
    } else {
      let containerLeft = container.getBoundingClientRect().left
      let containerTop = container.getBoundingClientRect().top
      let lastItem = container.querySelector('.autocomplete-seleted-item:last-child')
      let lastItemRight = lastItem.getBoundingClientRect().right
      let lastItemTop = lastItem.getBoundingClientRect().top

      this.inputCoverRef.current.style.paddingLeft = lastItemRight - containerLeft + 2 + 'px'
      this.inputCoverRef.current.style.paddingTop = lastItemTop - containerTop + 5 + 'px'
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
      activeInput,
      arrInputValue,
      activeOption
    } = this.state
    const listClass = classNames({
      [`autocomplete-list`]: true,
      [`${id}-list`]: true,
    })

    const matchedOptions = this.computedMatchedOptions(
      this.computedInternalOptions(options),
      activeInput,
      shouldMatchCase
    )

    return (
      <div className="autocomplete">
        <div className="autocomplete-selected" ref={this.autocompleteSelectedRef}>
        {arrInputValue.map((item, index) => (
          <div key={item} className="autocomplete-seleted-item">
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
          value={activeInput}
          onChange={(e) => this.handleActiveInputChange(e)}
          onKeyDown={(e) => this.handleKeyDown(e, matchedOptions, activeOption, arrInputValue, activeInput)}
        />
        {matchedOptions.length > 0 &&
          <ul className={listClass}>
            {
              matchedOptions.map(item => (
                <li
                  key={item}
                  className={(activeOption === item ? "active" : "")}
                  onClick={(e) => this.handleAddOption(e, item, arrInputValue)}
                >
                  {this.highlightWord(item, activeInput)}
                </li>
              ))
            }
          </ul>
        }
      </div>
    )
  }
}

export default Autocomplete
