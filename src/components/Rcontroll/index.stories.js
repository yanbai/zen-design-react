import React from "react"
import { withKnobs } from "@storybook/addon-knobs"
import Control from "./control"
import UncontrolComponent from "./uncontrol"
import { Uncontrol as UncontrolWithRef } from "./uncontrol-with-forwardref"

import AntipatternOne from "./antipattern-one"
import AntipatternTwo from "./antipattern-two"

import MonitorProps from "./monitor-props"
// https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html#anti-pattern-unconditionally-copying-props-to-state
// https://juejin.cn/post/6844903760305602568
// https://codesandbox.io/s/m3w9zn1z8x?file=/index.js
export default {
  title: "Control VS Uncontrol",
  decorators: [withKnobs],
}

class Demo extends React.Component {
  state = {
    outerChecked: false,
    outerStateText: "original",
    currentAccount: {
      email: "accountOne@gmail.com",
      userId: 1,
    },
  }
  outerRef = React.createRef()
  outerOnChange(e) {
    this.setState({ outerChecked: e.target.value })
  }
  outerHandleChange = e => {
    console.log(e.target.checked)
  }
  changeAccount = e => {
    this.setState({
      outerChecked: !this.state.outerChecked,
      outerStateText: this.state.outerStateText + "changed",
    })
  }
  componentDidMount() {
    this.outerRef.current.style.background = "red"
  }
  render() {
    const { email, outerChecked } = this.state
    return (
      <>
        <div>
          <Control
            checked={outerChecked}
            onChange={e => this.outerOnChange(e)}
          />
        </div>
        <div>
          <UncontrolComponent />
        </div>
        <div>
          uncontrol with ref:
          <UncontrolWithRef ref={this.outerRef} />
        </div>

        <div>
          anti-pattern one:
          <AntipatternOne email="default@gmail.com" />
        </div>

        <div>
          anti-pattern two:
          <AntipatternTwo
            // value="default@gamil.com"
            onChange={this.outerHandleChange}
          ></AntipatternTwo>
        </div>
        <div>
          <MonitorProps
            userId={this.state.currentAccount.userId}
            email={this.state.currentAccount.email}
          ></MonitorProps>
        </div>
        <div>
          <button onClick={this.changeAccount}>
            change outer state
          </button>
        </div>
        {this.state.outerStateText}
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
