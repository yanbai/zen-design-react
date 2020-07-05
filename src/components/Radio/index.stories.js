import React from 'react'
import { withKnobs, text, boolean } from "@storybook/addon-knobs"
import Radio from './index'
import md from './index.md'
export default {
  title: 'Radio',
  decorators: [withKnobs]
}

class RadioWithHandleChanged extends React.Component {
  constructor(props) {
    super(props)
    this.changeSingleValue = this.changeSingleValue.bind(this)
    this.state = {
      checked: false,
      options: [{
        value: 'male',
        label: 'Male'
      }, {
        value: 'female',
        label: 'Female'
      }],
      value: 'female'
    }
  }

  changeSingleValue(e) {
    this.setState({
      checked: e.target.checked
    })
  }

  changeGroupValue(value) {
    this.setState({
      value: value
    })
  }

  render() {
    return (
      <>
        <h1>Radio</h1>
        <h3>Demo</h3>
        <h6>
          Please change props with knobs
        </h6>
        <Radio
          disabled={boolean('Disabled', false)}
          label={text('Label', 'radio')}
          id={text('Id', 'radio')}
          checked={this.state.checked}
          handleChanged={this.changeSingleValue}
        />
        <div className="column">
        <h6>please choose your gender</h6>
        {this.state.options.map((item, index) => (
          <div className="column" key={index}>
            <Radio
              key={index}
              id={item.value}
              label={item.label}
              value={item.value}
              checked={this.state.value === item.value}
              handleChanged={e => this.changeGroupValue(item.value)}
            />
          </div>
        ))}
        </div>
        <h6>Value output:</h6>
        {this.state.value}
      </>
    )
  }
}

export const radio = () => (
  <RadioWithHandleChanged/>
)
radio.story = {
  parameters: {
    notes: {
      md
    }
  }
}
