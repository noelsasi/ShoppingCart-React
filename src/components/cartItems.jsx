import React, { Component } from "react";
import "./CartList.css";

class cartItems extends Component {
  state = {};
  render() {
    const items = this.props;
    const allItems = items.items;
    return (
      <div className="container col-md-12">
        <table className="table">
          <thead>
            <tr>
              <th>Items({allItems.length})</th>
              <th>Qty</th>
              <th>Price</th>
            </tr>
          </thead>
          {allItems.length > 0 ? (
            <tbody>
              {allItems.map((item, index) => (
                <tr className="item-row" key={item.id}>
                  <td>
                    <div className="item-name p-1">
                      <img src={item.img_url} alt="" />
                      <p>{item.name}</p>
                      <span
                        className="remove-item"
                        onClick={() => this.props.removeItem(index)}
                      >
                        X
                      </span>
                    </div>
                  </td>
                  <td>
                    <div className="qty">
                      <span className="qty-col">
                        <button
                          className="badge minus-item badge-danger p-1 btn btn-sm"
                          onClick={() => this.props.removeFromCart(item)}
                        >
                          -
                        </button>
                      </span>
                      <span className="qty-col qty-num">
                        <h6>{item.units}</h6>
                      </span>
                      <span className="qty-col">
                        <button
                          className="badge badge-primary add-item p-1 btn btn-sm"
                          onClick={() => this.props.addToCart(item, index)}
                        >
                          +
                        </button>
                      </span>
                    </div>
                  </td>
                  <td className="item-price">
                    <b>${item.price}</b>
                  </td>
                </tr>
              ))}
            </tbody>
          ) : (
            <tbody>
              <tr>
                <td className="text-center mt-5">
                  <span className="nodata ">
                    <button
                      className="btn btn-md btn-primary"
                      onClick={() => this.props.loadItems()}
                    >
                      Click to get Items
                    </button>
                    <h3>No Items in Cart</h3>
                  </span>
                </td>
              </tr>
            </tbody>
          )}
        </table>
      </div>
    );
  }
}

export default cartItems;
