import React from "react"
import { withKnobs } from "@storybook/addon-knobs"
import AntCheckbox from "./index"
import md from "./index.md"

export default {
  title: "AntCheckbox",
  decorators: [withKnobs],
}

class Demo extends React.Component {
  onChange(e) {
    console.log(`checked = ${e.target.checked}`)
  }
  render() {
    return <AntCheckbox onChange={e=>this.onChange(e)}>checkbox</AntCheckbox>
  }
}

export const antCheckbox = () => <Demo />
antCheckbox.story = {
  parameters: {
    notes: {
      md,
    },
  },
}
