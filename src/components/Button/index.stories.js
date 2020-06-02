import React from 'react'
import { withKnobs, text, boolean, select } from "@storybook/addon-knobs";
import Button from './index'

export default {
  title: 'Button',
  decorators: [withKnobs]
}

export const button = () => (
  <Button type={select("ButtonTypes", ['primary', 'secondary'], "primary")}
          disabled={boolean("Disabled", false)}
          block={boolean("Block", false)}
          ghost={boolean("Ghost", false)}
          icon={text("Icon", 'shopping-cart')}
          href={text("Href", '')}
  >
    {text("Label", "Hello World")}
  </Button>
)
