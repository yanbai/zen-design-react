import React from "react"
import { withKnobs } from "@storybook/addon-knobs"
import AntCheckbox from "./index"
import md from "./index.md"

export default {
  title: "AntCheckbox",
  decorators: [withKnobs],
}

class Demo extends React.Component {
  state = {
    outsideChecked: true,
    disabled: false,
  }
  toggleChecked = e => {
    console.log(`checked = ${e.target.checked}`)
    this.setState({
      outsideChecked: !this.state.outsideChecked,
    })
  }
  onChange(e) {
    console.log(`checked = ${e.target.checked}`)
  }
  groupOnChange(checkedValues) {
    console.log("checked = ", checkedValues)
  }
  render() {
    return (
      <>
        <AntCheckbox onChange={e => this.onChange(e)}>
          checkbox
        </AntCheckbox>
        <AntCheckbox defaultChecked={false} disabled>
          checkbox with defaultChecked and disabled
        </AntCheckbox>
        <AntCheckbox defaultChecked disabled>
          checkbox with defaultChecked and disabled
        </AntCheckbox>
        <AntCheckbox
          onChange={e => this.toggleChecked(e)}
          checked={this.state.outsideChecked}
        >
          change state from outside
        </AntCheckbox>
        group with simple array:
        <AntCheckbox.Group
          options={["apple", "pear", "orange"]}
          defaultValue={["apple", "pear"]}
          onChange={checkedValues =>
            this.groupOnChange(checkedValues)
          }
        >
          change state from outside
        </AntCheckbox.Group>
        group with object array
        <AntCheckbox.Group
          options={[
            { label: "Apple", value: "Apple" },
            { label: "Pear", value: "Pear" },
            { label: "Orange", value: "Orange" },
          ]}
          defaultValue={["Apple", "Pear"]}
          onChange={checkedValues =>
            this.groupOnChange(checkedValues)
          }
        >
          change state from outside
        </AntCheckbox.Group>
      </>
    )
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
