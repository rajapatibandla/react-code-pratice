import React from "react";
import ReactDOM from "react-dom";

export default class Calculator extends React.Componet {
  constructor(props) {
    super(props);
    this.state = {
      temperature: ""
    };
  }

  _handleOnDatachange = event => {
    this.setState({
      temperature: event.target.value
    });
  };

  render() {
    return (
      <div>
        <lable htmlFor={"tempature1"} />
        <input
          id={"tempature1"}
          onChange={this._handleOnDatachange}
          type={"text"}
          value={this.state.temperature}
        />
      </div>
    );
  }
}
