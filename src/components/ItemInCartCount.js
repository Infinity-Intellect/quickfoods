import React, { Component } from "react";

export default class ItemInCartCount extends Component {
  render() {
    return (
      <div style={counterStyle}>
        <p style={{ textAlign: "center" }}>{this.props.count}</p>
      </div>
    );
  }
}
const counterStyle = {
  borderStyle: "solid",
  backgroundColor: "white",
  borderWidth: "3px",
  borderColor: "#34a4eb",
  width: "40%",
  height: "75%",
  color: "black",
  borderRadius: "15px"
};
