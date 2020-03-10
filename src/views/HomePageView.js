import React, { Component } from "react";
import FoodItemCard from "../components/FoodItemCard.js";
import axios from "axios";
import SearchBar from "../components/SearchBar.js";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class HomePageView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: [],
      searchterm: "",
      nItems: 6,
      cart: [],
      displayCart: false,
      isAdd: true
    };
    const url = "https://api.jsonbin.io/b/5dd2b22a2e22356f234db9d2";
    document.title = "QuickFoods Home";
  }
  componentDidMount() {
    this.getData();
  }
  async getData() {
    await axios.get("https://api.jsonbin.io/b/5dd2b22a2e22356f234db9d2").then(res => {
      this.setState({ menu: res.data });
    });
    this.setState({ loading: false });
  }
  showCart = () => {
    this.setState({ displayCart: true });
  };
  hideCart = () => {
    this.setState({ displayCart: false });
  };
  search = term => {
    return function (item) {
      return item.itemname.toLowerCase().includes(term.toLowerCase()) || !item;
    };
  };
  searchHandler = event => {
    this.setState({ searchterm: event.target.value });
  };
  updateNumberOfItems = () => {
    this.setState({ nItems: this.state.nItems + 3 });
  };

  updateCart = item => {
    var present = false;
    var newCart = this.state.cart;
    if (newCart.length !== 0) {
      newCart.forEach(cartItem => {
        if (cartItem.item.itemname === item.itemname) {
          cartItem.count += 1;
          this.setState({ cart: newCart });
          present = true;
        }
      });
    }
    if (present === false) {
      var newItem = { item, count: 1 };
      newCart.push(newItem);
      this.setState({ cart: newCart });
    }
  };
  render() {
    if (this.state.loading === true) {
      return <h1>Loading ....</h1>;
    }
    const menu = this.state.menu;

    return (
      <div className="container-fluid">
        <div className="row">
          <SearchBar onChange={this.searchHandler} />
        </div>
        <div className="row justify-content-center" style={{ marginTop: "2%" }}>
          <Link to={{ pathname: "/cart", state: { cart: this.state.cart } }}>
            <Button
              className="btn"
              size="lg"
              style={{
                backgroundColor: "#334580",
                borderColor: "#334580"
              }}
            >
              Proceed To Cart
            </Button>
          </Link>
        </div>
        <div className="row">
          {menu
            .filter(this.search(this.state.searchterm))
            .slice(0, this.state.nItems)
            .map(item => (
              <div
                key={item.itemname}
                className="col-4"
                style={{ paddingTop: "3%", paddingBottom: "2%" }}
              >
                <FoodItemCard
                  item={item}
                  onClick={() => this.updateCart(item)}
                />
              </div>
            ))}
        </div>
        <div className="row justify-content-center">
          {this.state.nItems < menu.length ? (
            <Button
              style={{ marginBottom: "2%" }}
              variant="dark"
              size="lg"
              onClick={this.updateNumberOfItems}
            >
              Click for more
            </Button>
          ) : (
              <div className="alert alert-info">
                That's It <strong>Folks</strong> ! We'll ask the{" "}
                <strong>Chef</strong> to add more items
            </div>
            )}
        </div>
      </div>
    );
  }
}
