import React from 'react'
import { withKnobs } from "@storybook/addon-knobs";
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
      sizeOptions: [
        { label: 'Extra Large', value: 'xl' },
        { label: 'Large', value: 'l' },
        { label: 'Medium', value: 'm' },
        { label: 'Small', value: 's' }
      ],
      sizeValue: ['s', 'm'],

      countryOptions: [{
        value: 'sg',
        label: 'Singapore'
      }, {
        value: 'us',
        label: 'America'
      }, {
        value: 'en',
        label: 'England'
      }],

      selected: 'us',

      isPopupOpen: false
    }
  }

  changeCountry(value, label) {
    this.setState({
      selected: value
    })
  }

  changeSize(event, id) {
    let temp = [...this.state.sizeValue]
    if(event.target.checked) {
      temp.push(id)
    } else {
      let position = temp.indexOf(id)
      temp.splice(position, 1)
    }

    this.setState({
      sizeValue: temp
    })
  }

  openPopup() {
    this.setState({
      isPopupOpen: true
    })
  }

  closePopup() {
    this.setState({
      isPopupOpen: false
    })
  }

  render() {
    const {
      sizeOptions,
      sizeValue
    } = this.state

    const sizeContent = (
      <>
        {sizeOptions.map(option => (
          <div className="column" key={option.value}>
            <Checkbox
              label={option.label}
              id={option.value}
              checked={sizeValue.includes(option.value)}
              handleChanged={(e) => this.changeSize(e, option.value)}
            />
          </div>
        ))}
      </>
    )

    const countryContent = (
      <div>
        <Select
          options={this.state.countryOptions}
          value={this.state.selected}
          handleChanged={(value, label) => this.changeCountry(value, label)} />
      </div>
    )

    const modalContent = (
      <form>
        <div className="column">
          <Collapse
            header="Size"
            content={sizeContent}
          />
        </div>
        <div className="column">
          <Collapse
            header="Please select"
            content={countryContent}
          />
        </div>
        <div className="column">
          <Button type="primary" block>
            submit
          </Button>
        </div>
      </form>
    )

    return (
      <>
        <Button
          type="secondary"
          href="#"
          ghost
          onClick={()=>this.openPopup()}
        >
          Show Modal
        </Button>
        <Modal
          isOpen={this.state.isPopupOpen}
          content={modalContent}
          handleClose={()=>this.closePopup()}
        />
      </>
    )
  }
}

export const modal = () => (
  <>
    <div className="column">
      <h1>Popup/Modal Windows</h1>
      <FilterForm />
    </div>
  </>
)
