import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "app/store";

export interface commonProps {
  leftMenuSize: number;
  menuStyle: { itemId: string; subOpen?: boolean }[];
  isAuth: boolean;
  authUser: any | null;
}
const initialState: commonProps = {
  leftMenuSize: 150,
  menuStyle: [],
  isAuth: false,
  authUser: null,
};
export const commonSlice = createSlice({
  name: "common",
  initialState,
  reducers: {
    leftMenuSizeChange: (state, action: PayloadAction<number>) => {
      state.leftMenuSize = action.payload;
    },
    menuStyleChange: (state, action) => {
      state.menuStyle = action.payload;
    },
    setIsAuth: (state, action) => {
      state.isAuth = action.payload;
    },
    setAuthUser: (state, action) => {
      state.authUser = action.payload;
    },
  },
});

export const { leftMenuSizeChange, menuStyleChange, setIsAuth, setAuthUser } =
  commonSlice.actions;

export const selectCommon = (state: RootState) => state.common;

export default commonSlice.reducer;
