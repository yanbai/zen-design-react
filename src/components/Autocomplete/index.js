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

  highlightWord() {

  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    this.rerenderInputStyle()
  }

  handleSelectItem(e, item, arrInputValue) {
    let newValue = arrInputValue.concat(item)
    this.setState({
      strInputValue: newValue.join('|'),
      arrInputValue: newValue,
      activeInput: '',
      activeOption: ''
    })
  }

  handleActiveInputChange(event) {
    this.setState({
      activeInput: event.target.value.trim(),
      activeOption: ''
    })
  }

  handleKeyUp(event, matchedOptions, activeOption, arrInputValue, activeInput) {
    let activeIndex = activeOption ? matchedOptions.findIndex(item => item === activeOption) : -1
    let _activeOption
    console.log(event.key)
    switch(event.key) {
      case 'ArrowDown':
        if(activeIndex === matchedOptions.length-1) activeIndex = -1
        _activeOption = matchedOptions[activeIndex + 1]
        this.setState({
          activeOption: _activeOption
        })
        break;
      case 'ArrowUp':
        if(activeIndex === 0) activeIndex = matchedOptions.length
        _activeOption = matchedOptions[activeIndex - 1]
        this.setState({
          activeOption: _activeOption
        })
        break;
      case 'Enter':
        this.handleSelectItem(event, activeOption, arrInputValue)
        break;
      case 'Backspace':
        if(activeInput.length > 0) return
        let newArr = arrInputValue.reverse().slice(1).reverse()
        // let newArr = arrInputValue.splice(arrInputValue.length-1, 1)
        console.log(newArr)
        this.setState({
          strInputValue: newArr.join('|'),
          arrInputValue: newArr,
          activeInput: '',
          activeOption: ''
        })
      default:
        return
    }
  }

  rerenderInputStyle() {
    let line = 0
    let top
    let originContentWidth = document.querySelector('.autocomplete-selected').getBoundingClientRect().width ? document.querySelector('.autocomplete-selected').getBoundingClientRect().width : 0
    // let originContentHeight = document.querySelector('.autocomplete-selected').getBoundingClientRect().width ? document.querySelector('.autocomplete-selected').getBoundingClientRect().width : 0

    let contentWidth = parseInt(this.inputCoverRef.current.style.width, 10)
    if(originContentWidth > contentWidth) {
      top = 12 + 36
    }
    let left = originContentWidth || 16
    this.inputCoverRef.current.style.paddingLeft = left + 'px'
    this.inputCoverRef.current.style.paddingTop = top + 'px'
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
        <div className="autocomplete-selected">
        {arrInputValue.map(item => (
          <div key={item} className="autocomplete-seleted-item"><i className="far fa-times-circle"></i>{item}</div>
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
          onKeyUp={(e) => this.handleKeyUp(e, matchedOptions, activeOption, arrInputValue, activeInput)}
        />
        {matchedOptions.length > 0 &&
          <ul className={listClass}>
            {
              matchedOptions.map(item => (
                <li
                  key={item}
                  className={(activeOption === item ? "active" : "")}
                  onClick={(e) => this.handleSelectItem(e, item, arrInputValue)}
                >
                  {item}
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
