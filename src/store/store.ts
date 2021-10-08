import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../modules/users/infra/redux/slices/user-slice";
import globalSlice from "./slices/global-slice";
import sidebarReducer from "./slices/sidebar-slice";

export const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    global: globalSlice,
    user: userSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
