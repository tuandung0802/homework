import { takeLeading, takeEvery, put, select } from "redux-saga/effects";
import * as Actions from "../../../main/actionsType";
import { v4 as uuid } from "uuid";

export function* watcherOrders() {
  yield takeEvery(Actions.CHECK_OUT, workerCheckout);
}

function* workerCheckout(action) {
  try {
    console.log("workerCheckout started");
    const cart = yield select((state) => state.cartReducer);
    console.log(cart);
    const totalPrice = cart.reduce(
      (a, b) => a + b.quantity * b.product.price,
      0
    );
    const unique_id = uuid();
    const small_id = unique_id.slice(0, 8);
    yield put({
      type: Actions.CHECK_OUT_SUCCESS,
      payload: {
        order: cart,
        totalPrice: totalPrice,
        id: small_id,
        totalsTaxPrice: (totalPrice * 0.05 + totalPrice).toFixed(0),
      },
    });
    yield put({
      type: Actions.RESET_CART,
    });
  } catch (error) {
    console.log(error);
  }
}
