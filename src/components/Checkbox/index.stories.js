import React from 'react'
import { withKnobs, text, boolean } from "@storybook/addon-knobs"
import Checkbox from './index'
import md from './index.md'

export default {
  title: 'Checkbox',
  decorators: [withKnobs]
}

class CheckboxWithHandleChanged extends React.Component {
  constructor(props) {
    super(props)
    this.changeValue = this.changeValue.bind(this)
    this.state = {
      checked: true
    }
  }

  changeValue(e) {
    this.setState({
      checked: e.target.checked
    })
  }

  render() {
    return (
      <Checkbox
        label={text("Label", 'Married')}
        disabled={boolean("Disabled", false)}
        id={'marriage'}
        checked={this.state.checked}
        handleChanged={this.changeValue}
      />
    )
  }
}

export const checkbox = () => (
  <CheckboxWithHandleChanged />
)

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
      value: ['orange', 'pear']
    }
  }

  changeValue(event, id) {
    let temp = [...this.state.value]
    if(event.target.checked) {
      temp.push(id)
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
        {options.map(option => (
          <div className="column" key={option.value}>
            <Checkbox
              label={option.label}
              id={option.value}
              checked={value.includes(option.value)}
              handleChanged={(e) => this.changeValue(e, option.value)}
            />
          </div>
        ))}
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
