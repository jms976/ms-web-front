import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "app/store";

import { AllBotTemplate } from "./botAPI";

import { botTemplateProps } from "constants/Types";

export interface BotTemplateState {
  lists: botTemplateProps[];
}

const initialState: BotTemplateState = {
  lists: [],
};

export const getBotTemplateAsync = createAsyncThunk(
  "botTemplate/allBotTemplate",
  async () => {
    const response = await AllBotTemplate();
    return response;
  }
);

export const botTemplateSlice = createSlice({
  name: "botTemplate",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      getBotTemplateAsync.fulfilled,
      (state, action: PayloadAction<botTemplateProps[]>) => {
        state.lists = action.payload;
      }
    );
    // builder.addCase(getBotTemplateAsync.fulfilled, (state, action) => {
    //   state.lists = state.lists.map((item: any) => {
    //     if (item._id === action.payload._id) {
    //       return action.payload;
    //     } else {
    //       return item;
    //     }
    //   });
    // });
  },
});

export const selectBotTemplate = (state: RootState) => state.botTemplate.lists;
export default botTemplateSlice.reducer;
