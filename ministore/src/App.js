import { Route, Router, Routes, Switch } from "react-router-dom";
import "./App.css";
import NavBar from "./component/home/NavBar";
import Order from "./component/order/Order";
import Products from "./component/products/Products";
import Cart from "./component/giohang/Cart";
import { Provider } from "react-redux";
import store, { persistor } from "../../ministore/src/main/store";
import { PersistGate } from "redux-persist/lib/integration/react";
import AddProduct from "./component/product/AddProduct";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Routes>
          <Route element={<NavBar />}>
            <Route path="/addsanpham" element={<AddProduct />}></Route>

            <Route path="/sanpham" element={<Products />}></Route>
            <Route path="/giohang" element={<Cart />}></Route>
            <Route path="/donhang" element={<Order />}></Route>
          </Route>
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
