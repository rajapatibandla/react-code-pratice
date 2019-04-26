import React from "react";
import ReactDOM from "react-dom";

export function BoilngVerict(props) {
  if (props.celsius >= 1000) {
    console.log("temparature is enough to boil water");
  } else {
    console.log("temparature is not enough to boil water");
  }

  return <div id={"#div1"} />;
}

let root = document.getElementById("#div1");

ReactDOM.render(<BoilngVerict />, root);
