import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'antd-mobile'
import Home from "./pages/home/home";

function App () {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div className="conts">
        内容区
      </div>
      <Button
        type="primary"
        className="commodity-module__bottom__btn"
        style={{
          backgroundColor: '0',
          color: '#000'
        }}
        onClick={() => goPackage()}
      >{'立即购买'}</Button>
      <Home />
    </div>
  );
}
function goPackage (params) {
  console.log('---')

}

export default App;
