import React from 'react'
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import ZenCheckbox from './index'

export default {
  title: 'Checkbox',
  decorators: [withKnobs]
}

export const checkbox = () => (
  <ZenCheckbox
    label={text("Label", 'Married')}
    checked={boolean("Checked", true)}
    disabled={boolean("Disabled", false)}
  />
)



class CheckboxWithHandleChanged extends React.Component {
  constructor(props) {
    super(props)
    this.changeValue = this.changeValue.bind(this)
    this.state = {
      checked: true
    }
  }

  changeValue(e) {
    this.setState({
      checked: e.target.checked
    })
  }

  render() {
    return (
      <ZenCheckbox
        label={text("Label", 'Married')}
        id={text("Id", 'marriage')}
        checked={this.state.checked}
        handleChanged={this.changeValue}
      />
    )
  }
}

export const checkboxWithHandleChanged = () => (
  <CheckboxWithHandleChanged />
)

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
    const {
      name,
      value,
      options
    } = this.props

    return (
      <>
        {options.map(option => (
          <div className="column">
            <ZenCheckbox
              label={option}
              name={name}
              id={option}
              checked={value.includes(option)}
            />
          </div>
        ))}
      </>
    )
  }
}

// export const checkboxGroup = () => (
//   <CheckboxGroup
//     options={['oranve', 'apple', 'pear']}
//     value={['apple']}
//     name='fruit'
//   />
// )
