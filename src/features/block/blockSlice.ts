import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "app/store";

import { AllBlockTemplate } from "./blockAPI";

import { blockTemplateProps, blockItemProps } from "constants/Types";

export interface BlockTemplateState {
  lists: blockTemplateProps[];
}

const initialState: BlockTemplateState = {
  lists: [],
};

export const getBlockTemplateAsync = createAsyncThunk(
  "blockTemplate/allBlockTemplate",
  async () => {
    const response = await AllBlockTemplate();
    return response;
  }
);

export const blockTemplateSlice = createSlice({
  name: "blockTemplate",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      getBlockTemplateAsync.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.lists = action.payload;
      }
    );
  },
});

export const selectBlockTemplate = (state: RootState) =>
  state.blockTemplate.lists;
export default blockTemplateSlice.reducer;
