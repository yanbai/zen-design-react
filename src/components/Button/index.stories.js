import React from 'react'
import { withKnobs, text, boolean, select } from "@storybook/addon-knobs"
import Button from './index'
import md from './index.md'

export default {
  title: 'Button',
  decorators: [withKnobs]
}

export const button = () => (
  <>
    <div className="column">
    <Button level={select("ButtonLevels", ['primary', 'secondary'], "primary")}
            disabled={boolean("Disabled", false)}
            block={boolean("Block", false)}
            ghost={boolean("Ghost", false)}
            icon={text("Icon", 'shopping-cart')}
            href={text("Href", '')}
    >
      {text("Label", "Hello World")}
    </Button>
    </div>
    <div className="column">
    <Button level="primary"
            ghost={true}
    >
      {text("Label", "Hello World")}
    </Button>
    </div>
    <div className="column">
    <Button level="secondary"
    >
      {text("Label", "Hello World")}
    </Button>
    </div>
    <div className="column">
    <Button level="secondary"
            ghost={true}
    >
      {text("Label", "Hello World")}
    </Button>
    </div>
  </>
)
button.story = {
  parameters: {
    notes: {
      md
    }
  }
}
