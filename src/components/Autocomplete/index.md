# Autocomplete

### Preview

> You can play around with `KNOBS` at the bottom panel to update the properties

<!-- STORY -->

### Install

#### NPM

```js
import 'zendesign/dist/static/css/common.css';
import 'zendesign'
import Autocomplete from 'zendesign/dist/js/Autocomplete.js'
import 'zendesign/dist/static/css/Autocomplete.css'
```

```js
function App() {
  return (
    <>
      <Autocomplete
        options={['a', 'b', 'c']}
      />
    </>
  )
}
```

### Properties

| propName   | propType | defaultValue | isRequired | description                                                                                |
| ---------- | -------- | ------------ | ---------- | ------------------------------------------------------------------------------------------ |
| shouldMatchCase    | Boolean  | false        | false      | will match cases when pass true  |
| options            | Array  | -        | true      |     the options show in dropdown list      |
| defaultValue        | Array  | -        | false      |    the default value of autocomplete                |
| handleValueChanged  | Function   | -        | false      |  handle the value when changed  |


