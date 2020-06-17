import React from 'react'
import { withKnobs, boolean } from "@storybook/addon-knobs";
import Input from './index'

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
