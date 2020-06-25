# Radio

### Preview

> You can play around with `KNOBS` at the bottom panel to update the properties

<!-- STORY -->

### Install

#### NPM

```js
import 'zendesign/dist/static/css/common.css';
import 'zendesign/dist/js/vendor'
import Radio from 'zendesign/dist/js/radio.js'
import 'zendesign/dist/static/css/radio.css'
```

```js
class RadioGroup extends React.Component {
  constructor(props) {
    super(props)
    this.changeValue = this.changeValue.bind(this)
    this.state = {
      checked: false
    }
  }

  changeValue(e) {
    this.setState({
      checked: e.target.checked
    })
  }

  render() {
    return (
      <Radio
        disabled={boolean('Disabled', false)}
        label={text('Label', 'radio')}
        id={text('Id', 'radio')}
        checked={this.state.checked}
        handleChanged={this.changeValue}
      />
    )
  }
}
```

### Usage

```js
<Radio
  disabled={false}
  label="label"
  id="id"
  checked={false}
  handleChanged={this.changeValue}
/>
```

### Properties

| propName   | propType | defaultValue | isRequired | description                                                                                |
| ---------- | -------- | ------------ | ---------- | ------------------------------------------------------------------------------------------ |
| label    | String  | -        | false      | Label content                                                                       |
| id    | String  | -        | false      | As native radio id and "for" attribute of label                                                                      |
| checked | Boolean  | false        | false      | Status of radio                                                                        |                 |
| handleChanged       | function   | -            | false      | Will be called when radio is clicked |
| disabled | Boolean  | false        | false      | Set disabled                 |
