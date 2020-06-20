import React from 'react'
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import Radio from './index'

export default {
  title: 'Radio',
  decorators: [withKnobs]
}

class RadioWithHandleChanged extends React.Component {
  constructor(props) {
    super(props)
    this.changeValue = this.changeValue.bind(this)
    this.state = {
      checked: false
    }
  }

  changeValue(e) {
    this.setState({
      checked: e.target.checked
    })
  }

  render() {
    return (
      <Radio
        disabled={boolean('Disabled', false)}
        label={text('Label', 'radio')}
        id={text('Id', 'radio')}
        checked={this.state.checked}
        handleChanged={this.changeValue}
      />
    )
  }
}

export const radio = () => (
  <RadioWithHandleChanged/>
)
