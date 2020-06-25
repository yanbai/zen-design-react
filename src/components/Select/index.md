# Select

### Preview

> You can play around with `KNOBS` at the bottom panel to update the properties

<!-- STORY -->

### Install

#### NPM

```js
import 'zendesign/dist/static/css/common.css';
import 'zendesign/dist/js/vendor'
import Select from 'zendesign/dist/js/select.js'
import 'zendesign/dist/static/css/select.css'
```

```js
class SelectStory extends React.Component {
  constructor(props) {
    super(props)
    this.changeValue = this.changeValue.bind(this)
    this.state = {
      options: [{
        value: 'sg',
        label: 'Singapore'
      }, {
        value: 'us',
        label: 'America'
      }, {
        value: 'en',
        label: 'England'
      }],
      selected: 'us'
    }
  }

  changeValue(value, label) {
    this.setState({
      selected: value
    })
  }

  render() {
    return (
      <ZenSelect
        options={this.state.options}
        value={this.state.selected}
        disabled={boolean("Disabled", false)}
        handleChanged={this.changeValue}
      />
    )
  }
}
```

### Usage

```js
<ZenSelect
  options={[{value: 'sg', label: 'Singapore'}, {value: 'en', label: 'England'}]}
  value={this.state.selected}
  disabled={false}
  handleChanged={this.changeValue}
/>
```

### Properties

| propName   | propType | defaultValue | isRequired | description                                                                                |
| ---------- | -------- | ------------ | ---------- | ------------------------------------------------------------------------------------------ |
| options    | Array  | -        | false      | [{value: 'sg', label: 'Singapore'}, {value: 'en', label: 'England'}]                                                                       |
| value    | Array  | -        | false      | ['sg']                                                                      |
| disabled | Boolean  | false        | false      | Set disabled                 |
| handleChanged       | function   | -            | false      | Will be called when Select is clicked |

