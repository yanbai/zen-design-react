import React from "react"
import { withKnobs, text, boolean, select } from "@storybook/addon-knobs"
import ContentEditable from "./index"
import md from "./index.md"
import { ThemeContext } from "../theme-context"
// import '../../assets/style/_preprocess.scss'

export default {
  title: "ContentEditable",
  decorators: [withKnobs],
}

class Demo extends React.Component {
  constructor() {
    super()
    this.contentEditable = React.createRef()
    this.state = { html: "<b>Hello Yanbai <i>World</i></b>" }
  }

  handleChange = evt => {
    this.setState({ html: evt.target.innerHTML })
  }
  render() {
    return (
      <>
        <h1>Editor</h1>
        <h3>Demo</h3>
        <p>Please change props with knobs</p>

        <ContentEditable
          innerRef={this.contentEditable}
          html={this.state.html} // innerHTML of the editable div
          disabled={false} // use true to disable editing
          onChange={this.handleChange} // handle innerHTML change
          tagName="article" // Use a custom HTML tag (uses a div by default)
        />
      </>
    )
  }
}
export const editor = () => <Demo />
editor.story = {
  parameters: {
    notes: {
      md,
    },
  },
}
