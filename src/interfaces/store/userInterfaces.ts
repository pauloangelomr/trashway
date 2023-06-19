import {IUser} from "@interfaces/userInterface";
import {PayloadAction} from "@reduxjs/toolkit";

export interface IUserLogin {
  email: string;
  password: string;
}

export type ILoginPayloadAction = PayloadAction<IUserLogin>

export type ILoginResponse = PayloadAction<{user: IUser; token: string }>