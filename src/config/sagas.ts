import {all, fork} from "redux-saga/effects";
import userSagas from "@store/user/userSagas";

export default function* rootSaga() {
  yield all([fork(userSagas)]);
}