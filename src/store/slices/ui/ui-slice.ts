import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IUIState {
  isFullscreen: boolean;
  isSideBarVisible: boolean;
  isNavBarVisible: boolean;
}

const initialState: IUIState = {
  isFullscreen: false,
  isSideBarVisible: true,
  isNavBarVisible: true,
};

export const uiSlice = createSlice({
  name: "UIState",
  initialState,
  reducers: {
    toogleSideBar: (state, action: PayloadAction<boolean>) => {
      state.isSideBarVisible = action.payload;
    },
    toogleNavBar: (state, action: PayloadAction<boolean>) => {
      state.isNavBarVisible = action.payload;
    },
    toogleFullscreenMode: (state, action: PayloadAction<boolean>) => {
      state.isFullscreen = action.payload;
      state.isNavBarVisible = !action.payload;
      state.isSideBarVisible = !action.payload;
    },
  },
});

export const { toogleSideBar, toogleNavBar, toogleFullscreenMode } = uiSlice.actions;

export default uiSlice.reducer;
