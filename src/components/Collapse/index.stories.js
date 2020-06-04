import React from 'react'
import { withKnobs } from "@storybook/addon-knobs";
import Collapse from './index'

export default {
  title: 'Collapse',
  decorators: [withKnobs]
}

const collapseContent = (
  <div>
    <ul>
      <li>blue</li>
      <li>tomato</li>
      <li>orange</li>
    </ul>
  </div>
)

export const collapse = () => (
  <Collapse header="product type" content={collapseContent}
  />
)
