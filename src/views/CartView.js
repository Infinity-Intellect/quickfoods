import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class CartView extends Component {
  constructor(props) {
    super(props);
    document.title = "QuickFoods Cart";
  }

  render() {
    let { cart } = this.props.location.state;
    let displayCart = [];
    let count = 0;
    cart.forEach(cartItem => {
      var totalPrice = cartItem.item.price * cartItem.count;
      displayCart.push({
        itemname: cartItem.item.itemname,
        price: cartItem.item.price,
        totalprice: totalPrice,
        quantity: cartItem.count
      });
    });
    let totalAmount = 0;
    for (var i = 0; i < displayCart.length; i++) {
      totalAmount += displayCart[i].totalprice;
    }
    return (
      <div className="container">
        <table
          className="table table-hover table-dark"
          style={{ color: "white", marginTop: "5%" }}
        >
          <thead className="thead-light">
            <th>#</th>
            <th>Item</th>
            <th>Price(per item)</th>
            <th>Quantity</th>
            <th>Price</th>
          </thead>
          {cart.length > 0 ? (
            displayCart.map(item => (
              <tr>
                <th>{++count}</th>
                <td>{item.itemname}</td>
                <td>{item.price}</td>
                <td>{item.quantity}</td>
                <td>{item.totalprice}</td>
              </tr>
            ))
          ) : (
            <div className="alert alert-info" style={{ marginTop: "3%" }}>
              Your cart is <strong>empty</strong>, Don't leave empty-handed !
            </div>
          )}

          <tfoot>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <th>Total</th>
              <th>{totalAmount}</th>
            </tr>
          </tfoot>
        </table>

        <div className="row justify-content-center">
          <div className="col-1">
            <Link to="/">
              <Button variant="secondary">Back</Button>
            </Link>
          </div>
          <div className="col-1">
            {cart.length > 0 ? (
              <Link to="/">
                <Button variant="success">Order</Button>
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}
