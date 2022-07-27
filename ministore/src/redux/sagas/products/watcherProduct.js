import { takeLeading, takeEvery, put, call, select } from "redux-saga/effects";
import * as Actions from "../../../main/actionsType";

export function* watcherProducts() {
  yield takeLeading(Actions.LAY_DANH_SACH_SAN_PHAM, workerProducts());
  yield takeLeading(Actions.ADD_MY_CART, workerAddMycart);
  yield takeLeading(Actions.ADD_PRODUCT, workerAddProduct);
  yield takeLeading(Actions.REMOVE_PRODUCT, workerRemoveProduct);
}
function* workerProducts(action) {
  try {
    const products = yield select((state) => state.productReducer);
    // console.log()
    yield put({ type: "LAY_DANH_SACH_SAN_PHAM_SUCCESS", products: products });
  } catch (error) {
    yield put({
      type: "LAY_DANH_SACH_SAN_PHAM_FAILED",
      message: error.message,
    });
  }
}

function* workerAddMycart(action) {
  try {
    console.log(action);
    yield put({
      type: Actions.ADD_MY_CART_SUCCESS,
      payload: action.payload,
    });
  } catch (error) {
    console.log(error);
  }
}
function* workerRemoveProduct(action) {
  try {
    console.log(action);
    yield put({
      type: Actions.REMOVE_PRODUCT_SUCCESS,
      payload: action.payload,
    });
  } catch (error) {
    console.log(error);
  }
}

function* workerAddProduct(action) {
  try {
    console.log(action);
    yield put({
      type: Actions.ADD_PRODUCT_SUCCESS,
      payload: action.payload,
    });
  } catch (error) {
    console.log(error);
  }
}
