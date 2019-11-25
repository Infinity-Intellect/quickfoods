import React, { Component } from "react";

export default class ButtonDelete extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col">
            <button style={buttonstyle} onClick={this.props.onClick}>
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  }
}
const buttonstyle = {
  width: "70px",
  height: "30px",
  borderStyle: "solid",
  backgroundColor: "white",
  borderWidth: "3px",
  borderColor: "#34a4eb",
  color: "black",
  fontSize: "1em",
  borderRadius: "15px"
};
