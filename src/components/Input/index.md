# Input

### Preview

> You can play around with `KNOBS` at the bottom panel to update the properties

<!-- STORY -->

### Install

#### NPM

```js
import 'zendesign/dist/static/css/common.css';
import 'zendesign/dist/js/vendor'
import Input from 'zendesign/dist/js/input.js'
import 'zendesign/dist/static/css/input.css'
```

```js
function App() {
  return (
    <>
      <Input />
    </>
  )
}
```

### Properties

| propName   | propType | defaultValue | isRequired | description                                                                                |
| ---------- | -------- | ------------ | ---------- | ------------------------------------------------------------------------------------------ |
| disabled    | Boolean  | -        | false      | Set input disabled                      |
| label    | String  | -        | false      | Set input label                      |
| isError    | Boolean  | -        | false      | Set input error status                      |
| errorMessage    | String  | -        | false      | Set error message                      |
| errorRules    | Object  | -        | false      | see detail below                      |


### how to set error rules
Input component can accept a props named errorRules:

```js
const errorRules = {
  'isEmpty': {
    rule(value) {
      return value.length > 0
    },
    errorMessage: 'This is required',
    shouldTriggerWhenBlur: true
  },
  'isEmail': {
    rule(value) {
      return /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(value)
    },
    errorMessage: 'Please input correct email address',
    shouldTriggerWhenBlur: true
  }
}
<Input
  label={text('Label', 'Email')}
  disabled={boolean('Disabled', false)}
  errorRules={
    errorRules
  }
/>
```
errorRules is a object props, every rule including 'rule', 'errorMessage' and 'shouldTriggerWhenBlur',
rule is a function will receive the form element value as argument,
when rule returns false, will trigger the error message for form element,
you can define your own error rules
