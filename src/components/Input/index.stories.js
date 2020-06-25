import React from 'react'
import { withKnobs, boolean } from "@storybook/addon-knobs"
import Input from './index'
import md from './index.md'
export default {
  title: 'Input',
  decorators: [withKnobs]
}

export const input = () => (
  <>
    <div className="column">
      <Input disabled={boolean('Disabled', false)} />
    </div>
  </>
)
input.story = {
  parameters: {
    notes: {
      md
    }
  }
}
