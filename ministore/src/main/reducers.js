import { combineReducers } from "redux";
import productsReducer from "../redux/reducers/products/productReducer";
import cartReducer from "../redux/reducers/cart/cartReducer";
import ordersReducer from "../redux/reducers/orders/ordersReducer";

const reducer = combineReducers({
  productsReducer,
  cartReducer,
  ordersReducer,
});
export default reducer;
