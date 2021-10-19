import { Store } from "@reduxjs/toolkit";
import { Console } from "console";
import userService from "../modules/users/infra/adapters/services/user-service";
import { authenticate, getUserProfile, login } from "../modules/users/infra/redux/slices/user-slice";

async function initialReduxStartupScript(store: Store): Promise<void> {
  const response = await userService.getCurrentUserProfile();
  console.log("apos o request");
  if (response.isRight()) {
    console.log("success");
    store.dispatch(getUserProfile(response.value.getValue()));
    store.dispatch(authenticate());
    store.dispatch(login());
  } else {
    console.log("refresing token");
    const result = await userService.refreshUserAccessToken();
    if (result.isRight()) {
      console.log("token has been refreshed!");
      const response = await userService.getCurrentUserProfile();

      if (response.isRight()) {
        console.log("user has been recovered after token has been refreshed.");
        store.dispatch(getUserProfile(response.value.getValue()));
        store.dispatch(authenticate());
        store.dispatch(login());
      }
    }
    console.log("token problem");
  }
  //@ts-ignore
}

export { initialReduxStartupScript };
