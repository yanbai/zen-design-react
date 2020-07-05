import React from 'react'
import { withKnobs } from "@storybook/addon-knobs"
import Checkbox from './index'
import md from './index.md'

export default {
  title: 'Checkbox',
  decorators: [withKnobs]
}

// class CheckboxWithHandleChanged extends React.Component {
//   constructor(props) {
//     super(props)
//     this.changeValue = this.changeValue.bind(this)
//     this.state = {
//       checked: true
//     }
//   }

//   changeValue(e) {
//     this.setState({
//       checked: e.target.checked
//     })
//   }

//   render() {
//     return (
//       <Checkbox
//         label={text("Label", 'Married')}
//         disabled={boolean("Disabled", false)}
//         id={'marriage'}
//         checked={this.state.checked}
//         handleChanged={this.changeValue}
//       />
//     )
//   }
// }

// export const checkbox = () => (
//   <CheckboxWithHandleChanged />
// )

class CheckboxGroup extends React.Component {
  constructor(props) {
    super(props)
    this.changeValue = this.changeValue.bind(this)
    this.state = {
      options: [
        { label: 'Apple', value: 'apple' },
        { label: 'Pear', value: 'pear' },
        { label: 'Orange', value: 'orange' }
      ],
      value: ['pear', 'orange']
    }
  }

  changeValue(event, id, index) {
    let temp = [...this.state.value]
    if(event.target.checked) {
      temp.splice(index, 0, id)
      // temp.push(id)
    } else {
      let position = temp.indexOf(id)
      temp.splice(position, 1)
    }

    this.setState({
      value: temp
    })
  }

  render() {
    const {
      value,
      options
    } = this.state

    return (
      <>
        <h1>Checkbox</h1>
        <h3>Demo</h3>
        <div>
          {options.map((option, index) => (
            <div className="column" key={option.value}>
              <Checkbox
                label={option.label}
                id={option.value}
                checked={value.includes(option.value)}
                handleChanged={(e) => this.changeValue(e, option.value, index)}
              />
            </div>
          ))}
        </div>
        <h6>Value output:</h6>
        {this.state.value.join('|')}
      </>
    )
  }
}

export const checkboxGroup = () => (
  <CheckboxGroup />
)
checkboxGroup.story = {
  parameters: {
    notes: {
      md
    }
  }
}
