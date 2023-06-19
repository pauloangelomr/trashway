import {put, takeEvery, call} from "redux-saga/effects";
import * as reducers from "@store/user/userSlice";
import {ILoginPayloadAction} from "@interfaces/store/userInterfaces";
import api from "@config/api";
import {AxiosResponse} from "axios";
import {IUser} from "@interfaces/userInterface";

export type IUserAccess = {
  data: {
    token: string;
    userId: string;
  }
}

function* postLogin({payload}: ILoginPayloadAction) {
  const {data}: AxiosResponse<IUserAccess> = yield call(api.post, "/auth", payload);
  const {data: user}: AxiosResponse<IUser> = yield call(api.get, `/users/${data.data.userId}`);
  yield put(reducers.loginSuccess({user, token: data.data.token}));
}

export default function* userSagas() {
  yield takeEvery(reducers.login, postLogin);
}