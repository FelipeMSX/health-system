import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../modules/users/infra/redux/slices/user-slice";
import uiSlice from "./slices/ui/ui-slice";
import { initialReduxStartupScript } from "./startup-store";

export const store = configureStore({
  reducer: {
    ui: uiSlice,
    user: userSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

initialReduxStartupScript(store);
