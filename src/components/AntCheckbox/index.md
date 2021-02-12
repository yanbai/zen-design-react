# Checkbox

### Preview

> You can play around with `KNOBS` at the bottom panel to update the properties

<!-- STORY -->

### Install

#### NPM

```js
import 'zendesign/dist/static/css/common.css';
import 'zendesign/dist/js/vendor'
import Checkbox from 'zendesign/dist/js/checkbox.js'
import 'zendesign/dist/static/css/checkbox.css'
```

```js
class CheckboxGroup extends React.Component {
  constructor(props) {
    super(props)
    this.changeValue = this.changeValue.bind(this)
    this.state = {
      options: [
        { label: 'Apple', value: 'apple' },
        { label: 'Pear', value: 'pear' },
        { label: 'Orange', value: 'orange' }
      ],
      value: ['orange', 'pear']
    }
  }

  changeValue(event, id) {
    let temp = [...this.state.value]
    if(event.target.checked) {
      temp.push(id)
    } else {
      let position = temp.indexOf(id)
      temp.splice(position, 1)
    }

    this.setState({
      value: temp
    })
  }

  render() {
    const {
      value,
      options
    } = this.state

    return (
      <>
        {options.map(option => (
          <div className="column" key={option.value}>
            <Checkbox
              label={option.label}
              id={option.value}
              checked={value.includes(option.value)}
              handleChanged={(e) => this.changeValue(e, option.value)}
            />
          </div>
        ))}
      </>
    )
  }
}
```


### Usage

```js
<Checkbox
  label="label"
  id="id"
  checked={true}
  handleChanged={(e) => this.changeValue(e, option.value)}
/>
```

### Properties

| propName   | propType | defaultValue | isRequired | description                                                                                |
| ---------- | -------- | ------------ | ---------- | ------------------------------------------------------------------------------------------ |
| label    | String  | -        | false      | Label content                                                                       |
| id    | String  | -        | false      | As native checkbox id and "for" attribute of label                                                                      |
| checked | Boolean  | false        | false      | Status of checkbox                                                                        |                 |
| handleChanged       | function   | -            | false      | Will be called when checkbox is clicked |
| disabled | Boolean  | false        | false      | Set disabled                 |
