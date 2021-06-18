import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import memberReducer from "../features/member/memberSlice";
import botTemplateReducer from "../features/bot/botSlice";
import scenarioTemplateReducer from "../features/scenario/scenarioSlice";
import blockTemplateReducer from "../features/block/blockSlice";
import commonReducer from "../features/commonSlice/commonSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    member: memberReducer,
    botTemplate: botTemplateReducer,
    scenarioTemplate: scenarioTemplateReducer,
    blockTemplate: blockTemplateReducer,
    common: commonReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
