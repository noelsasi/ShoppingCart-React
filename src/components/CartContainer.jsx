import React, { Component } from "react";
import jsonData from "../myData.json";
import Items from "./cartItems";
import Total from "./totalPrice";
import Noty from "noty";
import "../../node_modules/noty/lib/noty.css";
import "../../node_modules/noty/lib/themes/mint.css";

class CartContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };

    // this.addToCart = this.addToCart.bind(this);
    // this.removeFromCart = this.removeFromCart.bind(this);
    // this.removeItem = this.removeItem.bind(this);
    // this.loadItems = this.loadItems.bind(this);
  }

  // componentWillMount() {
  //   localStorage.getItem("items") &&
  //     this.setState({
  //       items: JSON.parse(localStorage.getItem("items"))
  //     });
  //   console.log("I am WILLMOUNT");
  // }

  componentDidMount() {
    if (!localStorage.getItem("items")) {
      this.setState({ items: jsonData });
    }
    console.log("I am DIDMOUNT");
  }

  // componentWillUpdate(nextProps, nextState) {
  //   localStorage.setItem("items", JSON.stringify(nextState.items));
  //   console.log("I am WILLUPDATE");
  // }

  loadItems = () => {
    if (jsonData) {
      this.setState({ items: jsonData });
    }
  };

  addToCart = item => {
    item.units++;
    this.setState({ item });
  };

  removeFromCart = item => {
    if (item.units > 0) {
      item.units--;
      this.setState({ item });
    }
  };

  showNotifications() {
    new Noty({
      type: "success",
      layout: "topRight",
      text: "Item Removed from Cart",
      timeout: "2000"
    }).show();
  }

  removeItem = index => {
    const items = [...this.state.items];
    items.splice(index, 1);
    this.setState({ items });
    this.showNotifications();
  };

  render() {
    // console.log(this.state.items, "items");
    return (
      <div className=" container col-md-11">
        <h1> Order Summary</h1>
        <div className="d-flex flex-column-reverse flex-md-row">
          <div className="col-md-8">
            <Items
              items={this.state.items}
              addToCart={this.addToCart}
              removeFromCart={this.removeFromCart}
              removeItem={this.removeItem}
              loadItems={this.loadItems}
            />
          </div>
          <div className="col-md-3">
            <Total items={this.state.items} />
          </div>
        </div>
      </div>
    );
  }
}

export default CartContainer;
