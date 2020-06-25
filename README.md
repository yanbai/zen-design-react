# zen-design-react overview
Zen Design is a react UI component library
Zen Design uses [CSS Modules](https://github.com/css-modules/css-modules) by default to import stylesheets

<a href="https://zendesigner.appspot.com/">doc</a>
<a href="https://github.com/yanbai/zen-design-react">github</a>
<a href="https://www.npmjs.com/package/zendesign">npm</a>
# How To Use?
```bash
yarn add zendesign
or
npm install zendesign --save
```
```bash
import 'zendesign/dist/static/css/common.css';
import 'zendesign/dist/js/vendor'
import Button from 'zendesign/dist/js/button.js'
import 'zendesign/dist/static/css/button.css'
```

```bash
function App() {
  return (
    <>
      <div><Button>Hello World</Button></div>
    </>
  )
}
```
