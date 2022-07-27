import React from "react";
import styled from "styled-components";

const DetailOrderStyles = styled.div`
  .order-detail {
    display: grid;
    grid-template-columns: 3fr repeat(2, 1fr);
    /* grid-template-rows: ; */
    grid-column-gap: 30px;
    grid-row-gap: 0px;
  }
  .order-detail-title {
    /* flex: 1 100px; */
  }
`;
const OrderStyles = styled.div`
  .column-labels {
    border: 1px solid #ccc;
  }
`;
const DetailOrder = (data) => {
  const order = data.order;
  console.log(order.order);
  // const Total = Number(order.totalsTaxPrice);
  let product = order.order.map((product) => {
    return (
      <DetailOrderStyles>
        <label className="order-detail ">
          <span className="order-detail-title">{product.product.title} </span>
          <span className="order-detail-quantity">{product.quantity} </span>
          <span className="order-detail-price">
            {product.product.price * product.quantity} $
          </span>
        </label>
        <br></br>
      </DetailOrderStyles>
    );
  });

  return (
    <React.Fragment>
      <OrderStyles className="column-labels ">
        <label className="order-id ">{order.id}</label>
        <div className="">{product}</div>
        <label className="order-total ">{order.totalPrice.toFixed(2)}</label>
        <label className="order-tax ">5%</label>
        <label className="order-final ">
          {Number(order.totalsTaxPrice).toFixed(2)}
        </label>
        <label className="order-edit ">Edit</label>
      </OrderStyles>
    </React.Fragment>
  );
};

export default DetailOrder;
