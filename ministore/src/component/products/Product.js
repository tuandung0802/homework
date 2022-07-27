import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import * as Actions from "../../main/actionsType";
const ProductStyles = styled.div`
  .wsk-cp-product {
    background: #fff;
    padding: 15px;
    border-radius: 6px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    position: relative;
    margin: 20px auto;
    width: 200px;
  }
  .wsk-cp-img {
    position: absolute;
    top: 5px;
    left: 50%;
    transform: translate(-50%);
    -webkit-transform: translate(-50%);
    -ms-transform: translate(-50%);
    -moz-transform: translate(-50%);
    -o-transform: translate(-50%);
    -khtml-transform: translate(-50%);
    width: 100%;
    padding: 15px;
    transition: all 0.2s ease-in-out;
    align-items: center;
  }
  .wsk-cp-img img {
    width: 100%;
    transition: all 0.2s ease-in-out;
    border-radius: 6px;
  }
  .wsk-cp-product:hover .wsk-cp-img {
    top: -40px;
  }
  .wsk-cp-product:hover .wsk-cp-img img {
    box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  }
  .wsk-cp-text {
    padding-top: 150%;
  }
  .wsk-cp-text .category {
    text-align: center;
    font-size: 12px;
    font-weight: bold;
    padding: 5px;
    margin-bottom: 45px;
    position: relative;
    transition: all 0.2s ease-in-out;
  }
  .wsk-cp-text .category > * {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    -khtml-transform: translate(-50%, -50%);
  }
  .wsk-cp-text .category > span {
    padding: 12px 30px;
    border: 1px solid #313131;
    background: #212121;
    color: #fff;
    box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
    border-radius: 27px;
    transition: all 0.05s ease-in-out;
  }
  .wsk-cp-product:hover .wsk-cp-text .category > span {
    border-color: #ddd;
    box-shadow: none;
    padding: 11px 28px;
  }
  .wsk-cp-product:hover .wsk-cp-text .category {
    margin-top: 0px;
  }
  .wsk-cp-text .title-product {
    text-align: center;
  }
  .wsk-cp-text .title-product h3 {
    font-size: 20px;
    font-weight: bold;
    margin: 15px auto;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 100%;
  }
  .wsk-cp-text .description-prod p {
    margin: 0;
  }
  /* Truncate */
  .wsk-cp-text .description-prod {
    text-align: center;
    width: 100%;
    height: 62px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    margin-bottom: 15px;
  }
  .card-footer {
    padding: 25px 0 5px;
    border-top: 1px solid #ddd;
  }
  .card-footer:after,
  .card-footer:before {
    content: "";
    display: table;
  }
  .card-footer:after {
    clear: both;
  }

  .card-footer .wcf-left {
    float: left;
  }

  .card-footer .wcf-right {
    float: right;
  }

  .price {
    font-size: 18px;
    font-weight: bold;
  }

  a.buy-btn {
    display: block;
    color: #212121;
    text-align: center;
    font-size: 18px;
    width: 35px;
    height: 35px;
    line-height: 35px;
    /* border-radius: 50%; */
    border: 1px solid #212121;
    transition: all 0.2s ease-in-out;
  }
  a.buy-btn:hover,
  a.buy-btn:active,
  a.buy-btn:focus {
    border-color: #ff9800;
    background: #ff9800;
    color: #fff;
    text-decoration: none;
  }
  .wsk-btn {
    display: inline-block;
    color: #212121;
    text-align: center;
    font-size: 18px;
    transition: all 0.2s ease-in-out;
    border-color: #ff9800;
    background: #ff9800;
    padding: 12px 30px;
    border-radius: 27px;
    margin: 0 5px;
  }
  .wsk-btn:hover,
  .wsk-btn:focus,
  .wsk-btn:active {
    text-decoration: none;
    color: #fff;
  }
  .red {
    color: #f44336;
    font-size: 22px;
    display: inline-block;
    margin: 0 5px;
  }
  @media screen and (max-width: 991px) {
    .wsk-cp-product {
      margin: 40px auto;
    }
    .wsk-cp-product .wsk-cp-img {
      top: -40px;
    }
    .wsk-cp-product .wsk-cp-img img {
      box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3),
        0 15px 12px rgba(0, 0, 0, 0.22);
    }
    .wsk-cp-product .wsk-cp-text .category > span {
      border-color: #ddd;
      box-shadow: none;
      padding: 11px 28px;
    }
    .wsk-cp-product .wsk-cp-text .category {
      margin-top: 0px;
    }
    a.buy-btn {
      border-color: #ff9800;
      background: #ff9800;
      color: #fff;
    }
  }
  .icon-add {
    font-size: 10px;
  }
`;
const Product = (props) => {
  // const { id, image, title, price, category } = props.sanpham;
  // console.log(category);
  const product = props.product;
  const tax = Number(0.05);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const handleAddCart = () => {
    dispatch({
      type: Actions.ADD_MY_CART,
      payload: {
        product: props.product,
        quantity: quantity,
        tax: tax,
      },
    });
  };

  return (
    <ProductStyles>
      <div className="col-md-3">
        <div className="wsk-cp-product">
          <div className="wsk-cp-img">
            <img src={product.image} alt="Product" className="img-responsive" />
          </div>
          <div className="wsk-cp-text">
            <div className="category">
              <span>{product.category}</span>
            </div>
            <div className="title-product">
              <h3>{product.title}</h3>
            </div>
            <div className="description-prod">
              <p>{product.description}</p>
            </div>
            <input
              type="number"
              defaultValue={1}
              onChange={(e) => setQuantity(e.target.value)}
              placeholder="1"
              min={1}
            />
            <div className="card-footer">
              <div className="wcf-left">
                <span className="price">{product.price}$</span>
              </div>
              <div className="wcf-right">
                <a onClick={handleAddCart} className="buy-btn">
                  <i className="zmdi zmdi-shopping-basket">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                      className="icon-add"
                    >
                      <path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM272 180H316V224C316 235 324.1 244 336 244C347 244 356 235 356 224V180H400C411 180 420 171 420 160C420 148.1 411 140 400 140H356V96C356 84.95 347 76 336 76C324.1 76 316 84.95 316 96V140H272C260.1 140 252 148.1 252 160C252 171 260.1 180 272 180zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z" />
                    </svg>
                  </i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ProductStyles>
  );
};

export default Product;
