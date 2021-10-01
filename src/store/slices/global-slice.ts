import { createSlice } from "@reduxjs/toolkit";

export interface GlobalState {
  isFullscreen: boolean;
}

const initialState: GlobalState = {
  isFullscreen: true,
};

export const globalSlice = createSlice({
  name: "GlobalState",
  initialState,
  reducers: {
    close: (state) => {
      state.isFullscreen = false;
    },
    open: (state) => {
      state.isFullscreen = true;
    },
  },
});

export const { close, open } = globalSlice.actions;

export default globalSlice.reducer;
