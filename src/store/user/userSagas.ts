import {put, takeEvery} from "redux-saga/effects";
import * as reducers from "@store/user/userSlice";
import {ILoginPayloadAction} from "@interfaces/store/userInterfaces";

function* postLogin({payload}: ILoginPayloadAction) {
  console.log(payload);
  yield put(reducers.loginSuccess({
    user: {
      id: 1,
      name: "Johnsons",
      email: "johnsons@email.com",
      phone: "14999998888",
      cpf: "11122233344"
    }
  }));
}

export default function* userSagas() {
  yield takeEvery(reducers.login, postLogin);
}