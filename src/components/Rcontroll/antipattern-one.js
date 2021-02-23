import React from "react"

export default class EmailInput extends React.Component {
  state = { email: this.props.email }

  render() {
    return (
      <input
        onChange={this.handleChange}
        value={this.state.email}
      />
    )
  }

  handleChange = event => {
    this.setState({ email: event.target.value })
  }

  componentWillReceiveProps(nextProps) {
    // This will erase any local state updates!
    // Do not do this.
    this.setState({ email: nextProps.email })
  }
}
