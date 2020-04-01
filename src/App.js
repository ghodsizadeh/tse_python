// @flow
import React, { useState } from "react";
import "./App.css";
import logo from "./logo.svg";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        counter = {count}
        <button onClick={() => setCount(count + 1)}>Press me</button>
      </header>
    </div>
  );
}

export default App;
