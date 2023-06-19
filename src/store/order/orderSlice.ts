import {PayloadAction, createSlice} from "@reduxjs/toolkit";
import {IOrder} from "@interfaces/orderInterface";

export interface IOrderState {
  isLoading: boolean;
  orders: IOrder[];
  hasError: boolean;
}

export const initialState: IOrderState = {
  isLoading: false,
  hasError: false,
  orders: []
};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    getOrders(state) {
      state.isLoading = false;
      state.hasError = false;
    },
    getOrdersSuccess(state, {payload}: PayloadAction<{ orders: IOrder[] }>) {
      state.orders = payload.orders;
      state.isLoading = false;
    }
  },
});

export const {
  getOrders,
  getOrdersSuccess
} = orderSlice.actions;

export default orderSlice.reducer;