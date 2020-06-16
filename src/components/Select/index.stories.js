import React from 'react'
import { withKnobs, boolean } from "@storybook/addon-knobs";
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
        label: 'Singapore'
      }, {
        value: 'us',
        label: 'America'
      }, {
        value: 'en',
        label: 'England'
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
      <ZenSelect
        options={this.state.options}
        value={this.state.selected}
        disabled={boolean("Disabled", false)}
        handleChanged={this.changeValue}
      />
    )
  }
}

export const Select = () => (
  <SelectStory />
)
