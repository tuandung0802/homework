import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import * as Actions from "../../main/actionsType";
import { v4 as uuid } from "uuid";
const CartStyles = styled.div`
  @import "compass/css3";

  /*
I wanted to go with a mobile first approach, but it actually lead to more verbose CSS in this case, so I've gone web first. Can't always force things...

Side note: I know that this style of nesting in SASS doesn't result in the most performance efficient CSS code... but on the OCD/organizational side, I like it. So for CodePen purposes, CSS selector performance be damned.
*/

  /* Global settings */
  $color-border: #eee;
  $color-label: #aaa;
  $font-default: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue",
    Helvetica, Arial, sans-serif;
  $font-bold: "HelveticaNeue-Medium", "Helvetica Neue Medium";

  /* Global "table" column settings */
  .product-image {
    grid-area: 1 / 1 / 2 / 2;
  }
  .product-details {
    grid-area: 1 / 2 / 2 / 3;
  }
  .product-price {
    grid-area: 1 / 3 / 2 / 4;
  }
  .product-quantity {
    grid-area: 1 / 4 / 2 / 5;
  }
  .product-line-price {
    grid-area: 1 / 5 / 2 / 6;
  }
  .product-tax {
    grid-area: 1 / 6 / 2 / 7;
  }
  .product-after-tax {
    grid-area: 1 / 7 / 2 / 8;
  }
  .product-removal {
    grid-area: 1 / 8 / 2 / 9;
  }

  .column-labels {
    display: grid;
    grid-template-columns: 1.5fr 3fr repeat(6, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
  }

  /* This is used as the traditional .clearfix class */
  .group:before,
  .group:after {
    content: "";
    display: table;
  }
  .group:after {
    clear: both;
  }
  .group {
    zoom: 1;
  }

  /* Apply clearfix in a few places */

  /* Apply dollar signs */
  .product .product-price:before,
  .product .product-line-price:before,
  .totals-value:before {
    content: "$";
  }

  /* Body/Header stuff */
  body {
    padding: 0px 30px 30px 20px;
    font-family: $font-default;
    font-weight: 100;
  }

  h1 {
    font-weight: 100;
  }

  .shopping-cart {
    margin-top: -45px;
  }

  /* Column headers */
  .column-labels {
    label {
      /* padding-bottom: 15px;
      margin-bottom: 15px;
      border-bottom: 1px solid $color-border; */
    }

    .product-image,
    .product-details,
    .product-removal {
      text-indent: -9999px;
    }
  }

  /* Product entries */
  /* .product {
    margin-bottom: 20px;
    padding-bottom: 10px;

    .product-image {
      text-align: center;
      img {
        width: 100px;
      }
    }

    .product-details {
      .product-title {
        margin-right: 20px;
      }
      .product-description {
        margin: 5px 20px 5px 0;
        line-height: 1.4em;
      }
    }

    .product-quantity {
      input {
        width: 40px;
      }
    }

    .remove-product {
      border: 0;
      padding: 4px 8px;
      background-color: #c66;
      color: #fff;
      font-family: $font-bold;
      font-size: 12px;
      border-radius: 3px;
    }

    .remove-product:hover {
      background-color: #a44;
    }
  } */

  /* Totals section */

  .totals-item {
    float: right;
    clear: both;
    width: 100%;
    margin-bottom: 10px;

    label {
      float: left;
      clear: both;
      width: 79%;
      text-align: right;
    }

    .totals-value {
      float: right;
      width: 21%;
      text-align: right;
    }
  }

  .totals-item-total {
    font-family: $font-bold;
  }

  .checkout {
    float: right;
    border: 0;
    margin-top: 20px;
    padding: 6px 25px;
    background-color: #6b6;
    color: #fff;
    font-size: 25px;
    border-radius: 3px;
  }

  .checkout:hover {
    background-color: #494;
  }

  /* Make adjustments for tablet */
  /* @media screen and (max-width: 650px) {
    .shopping-cart {
      margin: 0;
      padding-top: 20px;
      border-top: 1px solid $color-border;
    }

    .column-labels {
      display: none;
    }

    .product-image {
      float: right;
      width: auto;
      img {
        margin: 0 0 10px 10px;
      }
    }

    .product-details {
      float: none;
      margin-bottom: 10px;
      width: auto;
    }

    .product-price {
      clear: both;
      width: 70px;
    }

    .product-quantity {
      width: 100px;
      input {
        margin-left: 20px;
      }
    }

    .product-quantity:before {
      content: "x";
    }

    .product-removal {
      width: auto;
    }

    .product-line-price {
      float: right;
      width: 70px;
    }
  } */

  /* Make more adjustments for phone */
  /* @media screen and (max-width: 350px) {
    .product-removal {
      float: right;
    }

    .product-line-price {
      float: right;
      clear: left;
      width: auto;
      margin-top: 10px;
    }

    .product .product-line-price:before {
      content: "Item Total: $";
    }

    .totals {
      .totals-item {
        label {
          width: 60%;
        }

        .totals-value {
          width: 40%;
        }
      }
    }
  } */
  .cart-heading {
    font-weight: 600;
    font-size: 30px;
    padding-left: 200px;
  }
  .flex-grow {
    height: 300px;

    overflow: scroll;
    .product {
      display: grid;
      grid-template-columns: 1.5fr 3fr repeat(6, 1fr);
      grid-template-rows: 1fr;
      grid-column-gap: 0px;
      grid-row-gap: 0px;
    }
    .product-image {
      grid-area: 1 / 1 / 2 / 2;
    }
    .product-details {
      grid-area: 1 / 2 / 2 / 3;
    }
    .product-price {
      grid-area: 1 / 3 / 2 / 4;
    }
    .product-quantity {
      grid-area: 1 / 4 / 2 / 5;
    }
    .product-line-price {
      grid-area: 1 / 5 / 2 / 6;
    }
    .product-tax {
      grid-area: 1 / 6 / 2 / 7;
    }
    .product-after-tax {
      grid-area: 1 / 7 / 2 / 8;
    }
    .product-removal {
      grid-area: 1 / 8 / 2 / 9;
    }
  }
  .product-image {
    text-align: center;
    img {
      width: 100px;
    }
  }
  .padding-right {
    padding-right: 20px;
  }
  .text-center {
    text-align: center;
  }
  .text-center-items {
  }
  /* .cart {
    display: flex;
  } */
  .footer {
  }
`;
const Cart = (props) => {
  const handleDeleteCart = () => {
    dispatch({
      type: Actions.REMOVE_PRODUCT,
      payload: { product: props.product },
    });
  };
  const dispatch = useDispatch();
  const unique_id = uuid();
  const small_id = unique_id.slice(0, 8);
  const checkOut = () => {
    dispatch({ type: Actions.CHECK_OUT });
  };
  const showTotalsTax = (cart) => {
    /// Tổng đơn hàng sau thuế
    var total = 0;
    if (cart.length > 0) {
      for (var i = 0; i < cart.length; i++) {
        total +=
          cart[i].product.price * cart[i].quantity +
          cart[i].product.price * cart[i].tax;
      }
    }
    return total;
  };

  const showTaxTotals = (cart) => {
    /// Tổng đơn hàng trước thuế
    var total = 0;
    if (cart.length > 0) {
      for (var i = 0; i < cart.length; i++) {
        total += cart[i].product.price * cart[i].quantity;
      }
    }
    return total;
  };
  const showTaxTotal = (a, b, c) => {
    /// giá sản phẩm sau thuế
    var total = 0;

    total += a * b + a * c;

    return total;
  };

  const showTotalTax = (a, b) => {
    // giá sản phẩm trước thuế
    var total = 0;
    total = a * b;

    return total;
  };
  const cart = useSelector((state) => state.cartReducer);
  return (
    <CartStyles>
      <div className="cart">
        <div className="cart-heading">Shopping Cart</div>

        <div className="column-labels ">
          <label className="product-image ">Image</label>
          <label className="product-details ">Product</label>
          <label className="product-price ">Price</label>
          <label className="product-quantity ">Quantity</label>

          <label className="product-line-price  ">Total</label>
          <label className="product-tax ">Tax</label>
          <label className="product-after-tax  ">Total after Tax</label>
          <label className="product-removal ">Remove</label>
        </div>
        <div className="flex-grow">
          {cart.length > 0 &&
            cart.map((cart) => (
              <div className="product ">
                <div className="product-image  ">
                  <img src={cart.product.image} alt="" />
                </div>
                <div className="product-details   ">
                  <div className="product-title">{cart.product.title}</div>
                  <p className="product-description">
                    {cart.product.description}
                  </p>
                </div>
                <div className="product-price  ">{cart.product.price}</div>
                <div className="product-quantity  ">{cart.quantity}</div>
                <div className="product-line-price">
                  {showTotalTax(cart.product.price, cart.quantity)}
                </div>
                <label className="product-tax ">{cart.tax * 100} %</label>
                <label className="product-after-tax  ">
                  {showTaxTotal(
                    cart.product.price,
                    cart.quantity,
                    cart.tax
                  ).toFixed(1)}{" "}
                  $
                </label>
                <div className="product-removal  ">
                  <button
                    className="remove-product "
                    onClick={handleDeleteCart}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
        </div>
        <div className="footer">
          <div className="totals">
            <div className="totals-item">
              <label>Total </label>
              <div className="totals-value" id="cart-subtotal">
                {showTaxTotals(cart).toFixed(1)}
              </div>
            </div>
            <div className="totals-item totals-item-total">
              <label>Final Total (tax 5%)</label>
              <div className="totals-value" id="cart-total">
                {showTotalsTax(cart).toFixed(1)}
              </div>
            </div>
          </div>
          <button onClick={checkOut} className="checkout">
            Checkout
          </button>
        </div>
      </div>
    </CartStyles>
  );
};

export default Cart;
