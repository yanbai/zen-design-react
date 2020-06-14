import React from 'react'
import { withKnobs } from "@storybook/addon-knobs";
import Collapse from './index'

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
    <Collapse header="color type" content={collapseContent_1}
    />
    <Collapse header="product type" content={collapseContent_2}
    />
  </>
)
