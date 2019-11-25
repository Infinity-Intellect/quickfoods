import React, { Component } from "react";
import quickfoods from "../quickfoodslogo.png";
export default class SearchBar extends Component {
  render() {
    return (
      <div className="container-fluid" style={containerstyle}>
        <div className="row" style={{ padding: "3%" }}>
          <div className="col-1 ">
            <img alt="Logo" src={quickfoods} width="50px"></img>
          </div>
          <div className="col-2 " align="left" style={namecontainer}>
            <h1>QuickFoods</h1>
          </div>
          <div className="col-8" align="center" style={{ marginTop: "2%" }}>
            <input
              type="text"
              placeholder="Find your tongue's desire"
              style={inputText}
              onChange={this.props.onChange}
            ></input>
          </div>
        </div>
      </div>
    );
  }
}
const containerstyle = {
  backgroundColor: "#151e2b",
  boxShadow: "2px 0px 4px #eb4934",
  backgroundAttachment: "fixed"
};
const namecontainer = {
  color: "white",
  marginTop: "2%"
};

const inputText = {
  fontFamily: "",
  backgroundColor: "#151e2b",
  fontSize: "1.2em",
  paddingRight: "4%",
  textAlign: "right",
  color: "white",
  width: "80%",
  height: "40px",
  borderStyle: "none",
  borderBottomStyle: "solid",
  borderBottomWidth: "4px",
  borderBottomColor: "#eb4934"
};
