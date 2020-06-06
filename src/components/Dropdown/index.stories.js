import React from 'react'
import { withKnobs } from "@storybook/addon-knobs";
import ZenSelect from './index'

export default {
  title: 'Select',
  decorators: [withKnobs]
}

class SelectStory extends React.Component {
  constructor(props) {
    super(props)
    this.changeValue = this.changeValue.bind(this)
    this.state = {
      options: [{
        value: 'sg',
        label: 'singapore'
      }, {
        value: 'us',
        label: 'america'
      }, {
        value: 'en',
        label: 'england'
      }],
      selected: 'us'
    }
  }

  changeValue(value, label) {
    this.setState({
      selected: value
    })
  }

  render() {
    return (
      <ZenSelect options={this.state.options} value={this.state.selected} handleChanged={this.changeValue} />
    )
  }
}

export const Select = () => (
  <SelectStory />
)
