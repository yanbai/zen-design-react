import React from "react"
import logRenderCount from "./logRenderCount"
export default class Input extends React.PureComponent {
  state = {
    email: this.props.email,
    lastUserId: this.props.userId,
  }
  handleChange = e => {
    this.setState({
      email: e.target.value,
    })
  }
  static getDerivedStateFromProps(props, state) {
    if (props.userId !== state.lastUserId) {
      return {
        email: props.email,
        lastUserId: props.userId,
      }
    }
    return null
  }
  render() {
    logRenderCount(this)
    const { email } = this.props
    return (
      <input
        type="text"
        value={email}
        onChange={this.handleChange}
      />
    )
  }
}
