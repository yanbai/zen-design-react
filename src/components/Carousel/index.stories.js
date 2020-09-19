import React from 'react'
import { withKnobs } from "@storybook/addon-knobs"
import Component from './index'
// import md from './index.md'
export default {
  title: 'Carousel',
  decorators: [withKnobs]
}

export const carousel = () => (
  <>
    <Component />
  </>
)
// component.story = {
//   parameters: {
//     notes: {
//       md
//     }
//   }
// }
