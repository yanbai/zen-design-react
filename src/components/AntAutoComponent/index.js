import React from "react"
import "./index.scss"
import classnames from "classnames"

class AntAutoComponent extends React.Component {
  state = {}
  render() {
    return (
      <div className="autocomplete">
        <div className="autocomplete-chunks">
          <div
            className={
              "autocomplete-chunk-item theme-heng-fa-chuen"
            }
          >
            <i className="far fa-times-circle"></i>
            chunck1
          </div>
        </div>
        <input
          readOnly
          className="autocomplete-input"
          type="text"
          // value={strInputValue}
        />
        <input
          type="text"
          className="autocomplete-cover"
          placeholder="placeholder"
          // value={currentInput}
          // onChange={(e) => this.handleCurrentInputChange(e)}
          // onKeyDown={(e) => this.handleKeyDown(e, matchedOptions, activeOptionIndex, arrInputValue, currentInput)}
        />
        <ul>
          <li
            className="active"
            // onClick={(e) => this.handleAddOption(e, item, arrInputValue)}
          >
            test1
          </li>
        </ul>
      </div>
    )
  }
}

export default AntAutoComponent
