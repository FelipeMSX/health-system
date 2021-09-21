import { createSlice } from "@reduxjs/toolkit";

export interface SidebarState {
  isOpened: boolean;
}

const initialState: SidebarState = {
  isOpened: true,
};

export const sidebarSlice = createSlice({
  name: "SidebarState",
  initialState,
  reducers: {
    close: (state) => {
      state.isOpened = false;
    },
    open: (state) => {
      state.isOpened = true;
    },
  },
});

export const { close, open } = sidebarSlice.actions;

export default sidebarSlice.reducer;
