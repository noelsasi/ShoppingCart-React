import React, { Component } from "react";
import nodata from "./empty.svg";

class totalPrice extends Component {
  state = {};


  total() {
    const items = this.props;
    const allCartItems = items.items;
    return allCartItems.reduce((total, item) => {
      const itemPrice = item.price * item.units;
      return total + itemPrice;
    }, 0);
  }

  totalDiscount() {
    const items = this.props;
    const allCartItems = items.items;
    return allCartItems.reduce((total, item) => {
      return total + item.discount * item.units;
    }, 0);
  }

  fictionDiscount() {
    const items = this.props;
    const allCartItems = items.items;
    return allCartItems.reduce((total, item) => {
      if (item.type === "fiction")
        return (total + (item.price * item.units) / 100) * 15;
      else return 0;
    }, 0);
  }

  finalAmount() {
    return this.total() - (this.totalDiscount() + this.fictionDiscount());
  }

  totalItems() {
    const items = this.props;
    const allItems = items.items;
    return allItems.filter(c => c.units > 0).length;
  }

  render() {
    const imgHt = {
      height: "200px",
      padding: "30px",
      margin: "0 auto"
    };

    const items = this.props;
    const allCartItems = items.items;

    // const sdf = allCartItems.map()
    return (
      <div className="pricing-container">
        <div className="card text-left">
          {allCartItems.length && this.totalItems() > 0 ? (
            <div className="cardo">
              <div className="card-body">
                <h5 className="card-title">Total</h5>

                <div className="inside-text">
                  <p className="card-text">
                    Items({this.totalItems()}) :{" "}
                    <b className="float-right">${this.total()}</b>
                  </p>
                  <p className="card-text mb-0">
                    Discount :{" "}
                    <b className="float-right"> - ${this.totalDiscount()}</b>
                  </p>
                  <p className="card-text">
                    Type discount :{" "}
                    <b className="float-right">- ${this.fictionDiscount()}</b>
                  </p>
                </div>
              </div>
              <div className="card-footer p-3">
                <p className="mb-0">
                  Order Total :
                  <b className="float-right">${this.finalAmount()}</b>
                </p>
              </div>
            </div>
          ) : (
            <div className="nodata">
              <img style={imgHt} src={nodata} alt="" />
              <p className="text-center">No Items Selected</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default totalPrice;
