import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyName from './Myname';
import Counter from './Counter';

function App() {
  var name1 = "hello";
  let style = {
    backgroundColor: "black",
    padding: "16px",

  }
  return (
    <div className="App" style={style}>
      <header className="App-header">
        <a href="https://www.naver.com">go to naver</a>
        hello! {name1}!
        <MyName name="React" />
        <Counter></Counter>
      </header>
    </div>
  );
}

export default App;
