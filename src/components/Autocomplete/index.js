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
    this.state = {
      strInputValue: '',
      arrInputValue: [],
      activeInput: ''
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

  computedCurrentInput(event) {
    // todo check cursor position
    let activeInput = event.target.value.split(' ').reverse()[0]
    this.setState({
      activeInput
    })
    return activeInput
  }

  computedArrInputValue(value) {
    let arr = value.trim() ? value.split(' ').filter(item => item!=='') : []
    return arr
  }

  highlightWord() {

  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // console.log(prevProps, prevState, snapshot)
    this.rerenderInputStyle()
  }

  handleSelectItem(e, item, strInputValue) {
    let previousValue = strInputValue.split(' ')
    let tailorValue = previousValue.slice(0, previousValue.length-1)
    let nextValue = tailorValue.concat(item)
    this.setState({
      strInputValue: nextValue.join(' '),
      activeInput: ''
    })
    return nextValue.join(' ')
  }

  handleValueChange(event) {
    this.computedCurrentInput(event)
    this.setState({
      strInputValue: event.target.value
    })
  }

  handleKeyDown(event) {

  }

  rerenderInputStyle() {
    let left = document.querySelector('.autocomplete-selected').getBoundingClientRect().width ? document.querySelector('.autocomplete-selected').getBoundingClientRect().width : 16
    console.log(left)
    console.log(this.inputRef.current)
    this.inputRef.current.style.paddingLeft = left + 'px'
  }

  render() {
    const {
      id,
      options,
      shouldMatchCase
    } = this.props
    const {
      strInputValue,
      activeInput
    } = this.state
    const classes = classNames({
      [`autocomplete-list`]: true,
      [`${id}-list`]: true,
    })

    return (
      <div className="autocomplete">
        <div className="autocomplete-selected">
        {this.computedArrInputValue(strInputValue).map(item => (
          <div key={item} className="autocomplete-seleted-item">{item}</div>
        ))}
        </div>
        <input
          ref={this.inputRef}
          className="autocomplete-input"
          placeholder="placeholder"
          type="text"
          value={strInputValue}
          onChange={(e) => this.handleValueChange(e)}
          onKeyDown={(e) => this.handleKeyDown(e)}
        />
        {this.computedMatchedOptions(
          this.computedInternalOptions(options),
          activeInput,
          shouldMatchCase
        ).length > 0 &&
          <ul className={classes}>
            {
              this.computedMatchedOptions(
                this.computedInternalOptions(options),
                activeInput,
                shouldMatchCase
              ).map(item => (
                <li
                  key={item}
                  className="active"
                  onClick={(e) => this.handleSelectItem(e, item, strInputValue)}
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
