import React from "react";
import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";
import Order from "../order/Order";
const NavBarStyles = styled.div`
  .navbar {
    &-items {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: 1fr;
      background-color: black;
    }
    &-item {
      padding-top: 20px;
      padding-bottom: 20px;
      color: white;
      text-align: center;
    }
  }
  .content {
    padding-top: 20px;
  }
`;
const NavBar = () => {
  return (
    <NavBarStyles className="navbar">
      <div className="navbar-items">
        <Link to="/addsanpham" className="navbar-item">
          THÊM SẢN PHẨM
        </Link>
        <Link to="/sanpham" className="navbar-item">
          SẢN PHẨM
        </Link>
        <Link to="/giohang" className="navbar-item">
          GIỎ HÀNG
        </Link>
        <Link to="/donhang" className="navbar-item">
          ĐƠN HÀNG
        </Link>
      </div>
      <div className="content">
        <Outlet></Outlet>
      </div>
    </NavBarStyles>
  );
};

export default NavBar;
