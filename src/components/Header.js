import React, { Component } from "react";

import quickfoods from "../quickfoodslogo.png";
export default class Header extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid" style={containerstyle}>
          <div className="row" style={{ padding: "3%" }}>
            <div className="col-1 ">
              <img alt="Logo" src={quickfoods} width="50px"></img>
            </div>
            <div className="col-2 " align="left" style={namecontainer}>
              <h1>QuickFoods</h1>
            </div>
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
