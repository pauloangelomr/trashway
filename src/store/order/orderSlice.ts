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
    getOrdersByUserId(state, _action: PayloadAction<{ userId: number }>) {
      state.isLoading = false;
      state.hasError = false;
      state.orders = [
        {
          detail: "Lixo do bem",
          id: 1,
          name: "Esse é um lixo mesmo",
          photo: "",
          type: 1,
          weight: 200
        }
      ];
    },
    getOrdersByUserIdSuccess(state, {payload}: PayloadAction<{ orders: IOrder[]}>) {
      state.orders = payload.orders;
      state.isLoading = false;
    }
  },
});

export const {
 getOrdersByUserId,
 getOrdersByUserIdSuccess
} = orderSlice.actions;

export default orderSlice.reducer;