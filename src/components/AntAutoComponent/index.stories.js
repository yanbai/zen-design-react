import React from "react"
import { withKnobs } from "@storybook/addon-knobs"
import Basic from "./index"

export default {
  title: "ant auto component",
  decorators: [withKnobs],
}

class Demo extends React.Component {
  state = {
    email: "test@gmail.com",
  }
  changeEmail(email) {
    this.setState({
      email,
    })
  }
  render() {
    const { email } = this.state
    return (
      <>
        <Basic checked>female</Basic>
      </>
    )
  }
}

export const antCheckbox = () => <Demo />
antCheckbox.story = {
  parameters: {
    notes: {},
  },
}
