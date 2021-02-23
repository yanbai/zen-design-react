import React from "react"

export default class Checked extends React.Component {
  state = {
    email: "value" in this.props ? this.props.value : "",
    prevPropsEmail:
      "value" in this.props ? this.props.value : "",
  }

  handleChange = e => {
    // if (!("value" in this.props)) {
    this.setState({
      email: e.target.value,
    })
    // }
    // if ("onChange" in this.props) {
    //   this.props.onChange(e)
    // }
  }

  static getDerivedStateFromProps(props, state) {
    if (props.value !== state.prevPropsEmail)
      return {
        email: props.value,
        prevPropsEmail: props.value,
      }
    return null
  }

  render() {
    const { email } = this.state
    return (
      <input
        type="text"
        value={email}
        onChange={this.handleChange}
      />
    )
  }
}
