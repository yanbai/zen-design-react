import React from 'react'
import { withKnobs, boolean, text } from "@storybook/addon-knobs"
import Input from './index'
import md from './index.md'
export default {
  title: 'Input',
  decorators: [withKnobs]
}

const errorRules = {
  'isEmpty': {
    rule(value) {
      return value.length > 0
    },
    errorMessage: 'This is required',
    shouldTriggerWhenBlur: true
  },
  'isEmail': {
    rule(value) {
      return /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(value)
    },
    errorMessage: 'Please input correct email address',
    shouldTriggerWhenBlur: true
  }
}

export const input = () => (
  <>
    <h1>Input</h1>
    <h3>Demo</h3>
    <h6>the validation rule can be customized, please check Notes for detail</h6>
    <div className="column">
      <Input
        label={text('Label', 'Email')}
        disabled={boolean('Disabled', false)}
        errorRules={
          errorRules
        }
      />
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
