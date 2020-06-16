import React from 'react'
import { withKnobs } from "@storybook/addon-knobs";
import Input from './index'

export default {
  title: 'Input',
  decorators: [withKnobs]
}

export const input = () => (
  <>
    <div className="column">
      <Input />
    </div>
  </>
)
