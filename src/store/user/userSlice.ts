import {PayloadAction, createSlice} from "@reduxjs/toolkit";
import {IUser} from "@interfaces/userInterface";

export interface IUserState {
  isLoading: boolean;
  user?: IUser;
  hasError: boolean;
  isLogged: boolean;
}

export const initialState: IUserState = {
  isLoading: false,
  hasError: false,
  isLogged: false
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login(state, {payload}: PayloadAction<{user: IUser}>) {
      state.user = payload.user;
      state.isLogged = true;
    },
   getUser(state) {
    state.isLoading = true;
   },
   logout(state) {
    state.user = undefined;
    state.isLogged = false;
   }
  },
});

export const {
 getUser,
 login,
 logout
} = userSlice.actions;

export default userSlice.reducer;