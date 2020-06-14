import React from 'react'
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import ZenCheckbox from './index'

export default {
  title: 'Checkbox',
  decorators: [withKnobs]
}

class CheckboxGroup extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      'user': [{
        id: 'shirt',
        name: 'shirt',
        value: true
      }, {
        id: 'pants',
        name: 'pants',
        value: false
      }]}
  }

  changeValue(id, checked) {
    console.log('----------id-------------')
    console.log(id)
    let temp = this.state.user
    if(id === 'shirt') {
      temp[0].value = !checked
      this.setState({
        user: temp
      })
    } else if(id === 'pants') {
      temp[1].value = !checked
      this.setState({
        user: temp
      })
    }
  }

  render() {
    return (
      <>
        <div className="column">
          <ZenCheckbox
            label={this.state.user[0].name}
            name={this.state.user[0].name}
            id={this.state.user[0].id}
            checked={this.state.user[0].value}
            handleChanged={this.changeValue.bind(this, this.state.user[0].id)} />
        </div>
        <div className="column">
          <ZenCheckbox
            label={this.state.user[1].name}
            name={this.state.user[1].name}
            id={this.state.user[1].id}
            checked={this.state.user[1].value}
            handleChanged={this.changeValue.bind(this, this.state.user[1].id)} />
        </div>
      </>
    )
  }
}

function changeValue(id, checked) {
  console.log('----------id-------------')
  console.log(id)
}

export const checkbox = () => (
  <ZenCheckbox
    label={text("Label", 'Married')}
    name={text("Name", 'marriage')}
    id={text("id", 'marriage')}
    checked={boolean("checked", true)}
    disabled={boolean("Disabled", false)}
    handleChanged={changeValue.bind(this, 'marriage')}
  />
)


export const checkboxGroup = () => (
  <CheckboxGroup />
)
