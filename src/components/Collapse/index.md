# Collapse

### Preview

> You can play around with `KNOBS` at the bottom panel to update the properties

<!-- STORY -->

### Install

#### NPM

```js
import 'zendesign/dist/static/css/common.css';
import 'zendesign/dist/js/vendor'
import Collapse from 'zendesign/dist/js/collapse.js'
import 'zendesign/dist/static/css/collapse.css'
```

```js
function App() {
  return (
    <>
      <Collapse header="Collapse header" content="Collapse content"/>
    </>
  )
}
```

### Usage

```js
<Collapse header="Collapse header" content="Collapse content"/>
```

### Properties

| propName   | propType | defaultValue | isRequired | description                                                                                |
| ---------- | -------- | ------------ | ---------- | ------------------------------------------------------------------------------------------ |
| header    | String  | -        | false      | Collapse header                                                                       |
| content    | String  | -        | false      | Collapse content                                                                      |

