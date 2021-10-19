import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../../core/models/user";

export interface IUserState {
  user: User | {};
  isAuthenticated: boolean;
  isLogged: boolean;
  isNewUser: boolean;
}

const initialState: IUserState = {
  user: {},
  isAuthenticated: false,
  isLogged: false,
  isNewUser: false,
};

export const userState = createSlice({
  name: "UserState",
  initialState,
  reducers: {
    login: (state) => {
      state.isLogged = true;
    },
    getUserProfile: (state, action: PayloadAction<User>) => {
      state.isLogged = true;
      state.user = action.payload;
    },
    // login: (state, action: PayloadAction<User>) => {
    //   state.isLogged = true;
    //   state.user = action.payload;
    // },
    authenticate: (state) => {
      state.isAuthenticated = true;
    },
  },
});

export const { login, authenticate, getUserProfile } = userState.actions;

export default userState.reducer;
