import { all } from "redux-saga/effects";
import { watcherProducts } from "../redux/sagas/products/watcherProduct";
import { watcherOrders } from "../redux/sagas/orders/watcherOrders";
export default function* rootSaga() {
  yield all([watcherProducts(), watcherOrders()]);
}
