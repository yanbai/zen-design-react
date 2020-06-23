import React from 'react';
import './App.css';
// zen design related
import './dist/static/css/common.css';
import './dist/js/vendor'
import Button from './dist/js/button'
import './dist/static/css/button.css'
import Collapse from './dist/js/collapse'
import './dist/static/css/collapse.css'

function App() {
  const collapseContent = (
    <div>
      <ul>
        <li>blue</li>
        <li>tomato</li>
        <li>orange</li>
      </ul>
    </div>
  )
  return (
    <>
      <div><Button>Hello World</Button></div>
      <div><Button href="https://github.com/yanbai">Hello World</Button></div>
      <div><Button ghost>Hello World</Button></div>
      <div><Button disabled>Hello World</Button></div>
      <div><Button block>Hello World</Button></div>
      <div><Button level="primary" icon="shopping-cart">Buy Now</Button></div>
      <div style={{width: 60 + 'vw'}}><Collapse header="product type" content={collapseContent} /></div>
      <div style={{width: 60 + 'vw'}}>
        <Collapse header="product type 2" content={collapseContent} />
        <Collapse header="product type 3" content={collapseContent} />
        <Collapse header="product type 4" content={collapseContent} />
      </div>
    </>
  )
}

export default App;
