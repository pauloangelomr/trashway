import {createSlice} from "@reduxjs/toolkit";
import {IUser} from "@interfaces/userInterface";
import {ILoginPayloadAction, ILoginResponse} from "@interfaces/store/userInterfaces";

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
    login(state, _action: ILoginPayloadAction) {
      state.isLoading = true;
      state.hasError = false;
    },
    loginSuccess(state, {payload}: ILoginResponse) {
      state.isLoading = false;
      state.user = payload.user;
      state.isLogged = true;
    },
    loginFailure(state) {
      state.isLoading = false;
      state.hasError = true;
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
 loginSuccess,
 loginFailure,
 logout
} = userSlice.actions;

export default userSlice.reducer;