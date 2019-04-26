import React from "react";
import ReactDOM from "react-dom";
import MyComponet from "./MyComponet";
import Calculator from "./Calculator";
import { BoilngVerict } from "./BoilngVerict";

import "./styles.css";

function App(props) {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <MyComponet />
      <Calculator />
      <BoilngVerict celsius={parseFloat(this.state.temperature)} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
