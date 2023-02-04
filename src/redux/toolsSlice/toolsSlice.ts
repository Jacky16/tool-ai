import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ToolsState } from "../types/types";

const initialState: ToolsState = {
  spamPercentage: 0,
};

export const toolsSlice = createSlice({
  name: "tools",
  initialState,
  reducers: {
    loadSpamPercentage: (currentState, action: PayloadAction<number>) => ({
      ...currentState,
      spamPercentage: action.payload,
    }),
  },
});

export const toolsReducer = toolsSlice.reducer;

export const { loadSpamPercentage: loadSpamPercentageActionCreator } =
  toolsSlice.actions;
