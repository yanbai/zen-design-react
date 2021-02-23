import React from "react"
import { withKnobs } from "@storybook/addon-knobs"
import Radio from "./index"

export default {
  title: "ant radio",
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
        <Radio>Radio</Radio>
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
