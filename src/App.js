import React from 'react';
import logo from './logo.svg';
import './App.css';
import './assets/style/base'
import Button from './components/Button'
import Collapse from './components/Collapse'

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
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
      <div><Button icon="shopping-cart">Buy Now</Button></div>
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
