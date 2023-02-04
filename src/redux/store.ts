import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { toolsReducer } from "./toolsSlice/toolsSlice";
import { uiReducer } from "./uiSlice/uiSlice";

export const store = configureStore({
  reducer: {
    tools: toolsReducer,
    ui: uiReducer,
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
