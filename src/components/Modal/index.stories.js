import React from 'react'
import { withKnobs } from "@storybook/addon-knobs"
import Modal from './index'
import Button from '../Button'
import Collapse from '../Collapse'
import Input from '../Input'
import Checkbox from '../Checkbox'
import Radio from '../Radio'
import Select from '../Select'
import md from './index.md'
export default {
  title: 'Modal',
  decorators: [withKnobs]
}

class FilterFormPopup extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sizeOptions: [
        { label: 'Extra Large', value: 'size-xl' },
        { label: 'Large', value: 'size-l' },
        { label: 'Medium', value: 'size-m' },
        { label: 'Small', value: 'size-s' }
      ],
      sizeValue: ['size-s', 'size-m'],

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

      isPopupOpen: false,

      deliveryMethodOptions: [{
        value: 'delivery-express',
        label: 'Express'
      }, {
        value: 'delivery-normal',
        label: 'Normal'
      }],

      selectedDeliveryMethod: [
        'delivery-express'
      ],

      keyword: ''
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

  changeDelivery(event,id) {
    let temp = [...this.state.selectedDeliveryMethod]

    if(event.target.checked) {
      temp = [
        id
      ]
    }

    this.setState({
      selectedDeliveryMethod: temp
    })
  }

  openPopup(e) {
    e.preventDefault()
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
      sizeValue,
      deliveryMethodOptions,
      selectedDeliveryMethod
    } = this.state

    const inputContent = (
      <Input name="keyword" placeholder="Please enter keyword" />
    )

    const sizeContent = (
      <>
        {sizeOptions.map(option => (
          <div className="column" key={option.value}>
            <Checkbox
              name={option.value}
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
          name="place-of-country"
          options={this.state.countryOptions}
          value={this.state.selected}
          handleChanged={(value, label) => this.changeCountry(value, label)} />
      </div>
    )

    const deliveryContent = (
      <>
        {deliveryMethodOptions.map(option => (
          <div className="column" key={option.value}>
            <Radio
              label={option.label}
              name={option.value}
              id={option.value}
              checked={selectedDeliveryMethod.includes(option.value)}
              handleChanged={(e) => this.changeDelivery(e, option.value)}
            />
          </div>
        ))}
      </>
    )

    const modalContent = (
      <form action="/submit_filter" method="post">
        <div className="column">
          <Collapse
            header="Please select keyword"
            content={inputContent}
          />
        </div>
        <div className="column">
          <Collapse
            header="Please select Size"
            content={sizeContent}
          />
        </div>
        <div className="column">
          <Collapse
            header="Please select place of origin"
            content={countryContent}
          />
        </div>
        <div className="column">
          <Collapse
            header="Please select delevery method"
            content={deliveryContent}
          />
        </div>
        <div className="column">
          <Button level="primary" block type="submit">
            submit
          </Button>
        </div>
      </form>
    )

    return (
      <>
        <Button
          level="secondary"
          href="#"
          ghost
          onClick={(e)=>this.openPopup(e)}
        >
          Show Modal
        </Button>
        <Modal
          header='products filter'
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
    <h1>Modal</h1>
    <h3>Demo</h3>
    <h6>This is a common use case of modal:</h6>
    <div className="column">
      <FilterFormPopup />
    </div>
  </>
)
modal.story = {
  parameters: {
    notes: {
      md
    }
  }
}
