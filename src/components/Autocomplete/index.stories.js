import React from 'react'
import { withKnobs } from "@storybook/addon-knobs"
import Autocomplete from './index'
import md from './index.md'

export default {
  title: 'Autocomplete',
  decorators: [withKnobs]
}

export const autocomplete = () => (
  <div className="column">
    <Autocomplete />
  </div>
)
autocomplete.story = {
  parameters: {
    notes: {
      md
    }
  }
}
