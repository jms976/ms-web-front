import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "app/store";

import { AllScenarioTemplate } from "./scenarioAPI";

import { scenarioTemplateProps } from "constants/Types";

export interface ScenarioTemplateState {
  lists: scenarioTemplateProps[];
}

const initialState: ScenarioTemplateState = {
  lists: [],
};

export const getScenarioTemplateAsync = createAsyncThunk(
  "scenarioTemplate/allScenarioTemplate",
  async () => {
    const response = await AllScenarioTemplate();
    return response;
  }
);

export const scenarioTemplateSlice = createSlice({
  name: "scenarioTemplate",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      getScenarioTemplateAsync.fulfilled,
      (state, action: PayloadAction<scenarioTemplateProps[]>) => {
        state.lists = action.payload;
      }
    );
  },
});

export const selectScenarioTemplate = (state: RootState) =>
  state.scenarioTemplate.lists;
export default scenarioTemplateSlice.reducer;
