import React from 'react'
import { withKnobs, text, boolean, select } from "@storybook/addon-knobs";
import Modal from './index'
import Button from '../Button'
import Collapse from '../Collapse'
import Checkbox from '../Checkbox'
import Select from '../Select'

export default {
  title: 'Modal',
  decorators: [withKnobs]
}

class FilterForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      'filterResult': [{
        id: 'x',
        name: 'extra large',
        label: 'extra large',
        value: true
      }, {
        id: 'm',
        name: 'medium',
        label: 'medium',
        value: false
      }],

      filterResultV2: {
        'size-x': true,
        'size-m': false
      },

      countryOptions: [{
        value: 'sg',
        label: 'singapore'
      }, {
        value: 'us',
        label: 'america'
      }, {
        value: 'en',
        label: 'england'
      }],

      selected: 'us'
    }
  }

  changeValue(value, label) {
    this.setState({
      selected: value
    })
  }

  changeValue(id, checked) {
    console.log('----------id-------------')
    console.log(id)
    let temp = this.state.filterResult
    if(id === 'x') {
      temp[0].value = !checked
      this.setState({
        filterResult: temp
      })
    } else if(id === 'm') {
      temp[1].value = !checked
      this.setState({
        filterResult: temp
      })
    }
  }

  render() {
    const collapseContent_1 = (
      <>
        <div className="column">
          <Checkbox
            label={this.state.filterResult[0].label}
            name={this.state.filterResult[0].name}
            id={this.state.filterResult[0].id}
            checked={this.state.filterResult[0].value}
            handleChanged={this.changeValue.bind(this, this.state.filterResult[0].id)} />
        </div>
        <div className="column">
          <Checkbox
            label={this.state.filterResult[1].label}
            name={this.state.filterResult[1].name}
            id={this.state.filterResult[1].id}
            checked={this.state.filterResult[1].value}
            handleChanged={this.changeValue.bind(this, this.state.filterResult[1].id)} />
        </div>
      </>
    )

    const collapseContent_2 = (
      <div>
        <Select options={this.state.countryOptions} value={this.state.selected} handleChanged={this.changeValue} />
      </div>
    )

    const content = (
      <>
        <div className="column">
          <Collapse header="Size" content={collapseContent_1}></Collapse>
        </div>
        <div className="column">
          <Collapse header="Please select" content={collapseContent_2}></Collapse>
        </div>
        <div className="column">
          <Button type="primary" block>
            submit
          </Button>
        </div>
      </>
    )
    return (
      <Modal content={content} />
    )
  }
}



export const modal = () => (
  <>
    <div className="column">
      <h1>Popup/Modal Windows</h1>
      <Button
        type="secondary"
        href="#popup1"
        ghost
      >
        Show Modal
      </Button>
      <FilterForm />
    </div>
  </>
)
