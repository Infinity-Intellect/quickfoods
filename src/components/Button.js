import React, { Component } from "react";

export default class Button extends Component {
  constructor(props) {
    super(props);
    props = this.props;
  }
  render() {
    return (
      <div>
        <button style={buttonstyle}>{this.props.text}</button>
      </div>
    );
  }
}
const buttonstyle = {
  width: "40%",
  height: "40px",
  borderStyle: "none",
  backgroundColor: "#eb4934",
  color: "white",
  fontSize: "1.2em",
  borderRadius: "15px"
};
