import {all, fork} from "redux-saga/effects";
import userSagas from "@store/user/userSagas";
import orderSagas from "@store/order/orderSaga";

export default function* rootSaga() {
  yield all([fork(userSagas), fork(orderSagas)]);
}