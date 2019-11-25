import React, { Component } from "react";
import ButtonAdd from "./ButtonAdd";
import ItemInCartCount from "./ItemInCartCount";
//import ButtonDelete from "./ButtonDelete";
export default class FoodItemCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  increaseCount = () => {
    let newCount = this.state.count;
    newCount = newCount + 1;
    this.setState({ count: newCount });
  };
  decreaseCount = () => {
    let newCount = this.state.count;
    if (newCount > 0) {
      newCount = newCount - 1;
    }
    this.setState({ count: newCount });
  };
  render() {
    return (
      <div className="container" style={outercontainer}>
        <div className="row" style={{ paddingTop: "20px" }}>
          <div className="col text-left">
            <h4>{this.props.item.itemname}</h4>
          </div>
          <div className="col text-right">
            <h3>Rs. {this.props.item.price}</h3>
          </div>
        </div>
        <div className="row" style={{ marginTop: "40px" }}>
          <div className="col-4 ">
            <ItemInCartCount count={this.state.count} />
          </div>
          <div className="col-4">
            {/* <ButtonDelete
              onClick={() => {
                this.decreaseCount();
                this.props.onClick();
              }}
            /> */}
          </div>
          <div className="col-4">
            <ButtonAdd
              onClick={() => {
                this.increaseCount();
                this.props.onClick();
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}
const outercontainer = {
  boxShadow: "2px 0px 4px white",
  width: "290px",
  height: "200px",
  borderStyle: "solid",
  borderRadius: "15px",
  borderColor: "#6b6d70",
  backgroundColor: "#2d425e",
  color: "white"
};
