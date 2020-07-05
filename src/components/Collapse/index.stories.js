import React from 'react'
import { withKnobs } from "@storybook/addon-knobs"
import Collapse from './index'
import md from './index.md'
export default {
  title: 'Collapse',
  decorators: [withKnobs]
}

const collapseContent_1 = (
  <div>
    <p className="column">blue</p>
    <p className="column">tomato</p>
    <p className="column">orange</p>
  </div>
)

const collapseContent_2 = (
  <div>
    <p className="column">shirts</p>
    <p className="column">pants</p>
    <p className="column">watches</p>
  </div>
)

export const collapse = () => (
  <>
    <h1>Collapse</h1>
    <h3>Demo</h3>
    <h6>Collapse is used for hide content whene space is not enough. Please check usage in modal component</h6>
    <Collapse header="color type" content={collapseContent_1}
    />
    <Collapse header="product type" content={collapseContent_2}
    />
  </>
)
collapse.story = {
  parameters: {
    notes: {
      md
    }
  }
}
