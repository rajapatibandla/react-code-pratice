import React, { Fragment } from "react";

export default class MyComponet extends React.Component {
  constructor(props) {
    super(props);
    // initial state set
    this.state = {
      value: ""
    };
  }

  _handleChange = event => {
    this.setState({
      value: event.target.value
    });
    console.log("this is ented value", event.target.value);
  };

  _onHandleClik = event => {
    this.setState({
      value: event.target.value
    });
    console.log("this is ented value", event.target.value);
  };

  render() {
    return (
      <Fragment>
        <lable htmlFor={"myFirstInput"}>MY FIRST INPUT: </lable>
        <input
          id={"myFirstInput"}
          type={"text"}
          onChange={this._handleChange}
          value={this.state.value}
        />
        <button className={"clrButton"} onClick={this._onHandleClik}>
          Clear Me
        </button>
      </Fragment>
    );
  }
}
