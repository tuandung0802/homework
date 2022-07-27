import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import DetailOrder from "./DetailOrder";
const OrderStyles = styled.div`
  .cart-heading {
  }
  .column-labels {
    display: grid;
    grid-template-columns: 1fr 4fr 1.5fr 1fr 1.5fr 1fr;
    grid-template-rows: 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 15px;
    padding-top: 50px;
  }

  .order-id {
    grid-area: 1 / 1 / 2 / 2;
    text-align: center;
  }

  .order-detail {
    grid-area: 1 / 2 / 2 / 3;
    text-align: center;
  }

  .order-total {
    grid-area: 1 / 3 / 2 / 4;
    text-align: center;
  }

  .order-tax {
    grid-area: 1 / 4 / 2 / 5;
    text-align: center;
  }

  .order-final {
    grid-area: 1 / 5 / 2 / 6;
    text-align: center;
  }

  .order-edit {
    grid-area: 1 / 6 / 2 / 7;
    text-align: center;
  }
  .cart-heading {
    font-weight: 600;
    font-size: 30px;
    padding-left: 200px;
  }
`;
const Order = () => {
  const [orders, setOrders] = useState([]);
  const dispatch = useDispatch();
  const order = useSelector((state) => state.ordersReducer);
  //   console.log(order);
  useEffect(() => {
    // dispatch({
    //   type: Actions.LAY_DANH_SACH_SAN_PHAM,
    // });
    setOrders(orders);
  }, [dispatch, order]);
  return (
    <OrderStyles>
      <div className="cart-heading">Orders List</div>

      <div className="column-labels ">
        <label className="order-id ">ID</label>
        <label className="order-detail ">Product</label>
        <label className="order-total ">Total</label>
        <label className="order-tax ">Tax</label>
        <label className="order-final ">Total final</label>
        <label className="order-edit ">Edit</label>
      </div>
      {order.length > 0 &&
        order.map((order) => <DetailOrder order={order}></DetailOrder>)}
    </OrderStyles>
  );
};

export default Order;
