# Modal

### Preview

> You can play around with `KNOBS` at the bottom panel to update the properties

<!-- STORY -->

### Install

#### NPM

```js
import 'zendesign/dist/static/css/common.css';
import 'zendesign/dist/js/vendor'
import Modal from 'zendesign/dist/js/modal.js'
import 'zendesign/dist/static/css/modal.css'
```

```js

class FilterFormPopup extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isPopupOpen: false,
    }
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
          isOpen={this.state.isPopupOpen}
          content="This is modal content"
          handleClose={()=>this.closePopup()}
        />
      </>
    )
  }
}

```

### Usage

```js
```

### Properties

| propName   | propType | defaultValue | isRequired | description                                                                                |
| ---------- | -------- | ------------ | ---------- | ------------------------------------------------------------------------------------------ |
| isOpen    | Boolean  | -        | false      | Set the modal open or close |
| header    | String  | -        | false      | Modal header               |
| content    | String  | -        | false      | Modal content               |
| handleClose       | function   | -            | false      | Will be called when close button is clicked |

