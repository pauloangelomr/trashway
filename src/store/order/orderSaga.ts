import {put, takeEvery, call} from "redux-saga/effects";
import * as reducers from "@store/order/orderSlice";
import api from "@config/api";
import {AxiosResponse} from "axios";
import {IOrder} from "@interfaces/orderInterface";

function* getOrders() {
  const {data}: AxiosResponse<IOrder[]> = yield call(api.get, "/orders");

  yield put(reducers.getOrdersSuccess({orders: data}));

}

export default function* orderSagas() {
  yield takeEvery(reducers.getOrders, getOrders);
}