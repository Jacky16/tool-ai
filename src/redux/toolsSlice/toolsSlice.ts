import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { EmailSpamCheckerPayload, ToolsState } from "../types/types";

const initialState: ToolsState = {
  emailSpamChecker: {
    prediction: "",
    confidence: 0,
  },
};

export const toolsSlice = createSlice({
  name: "tools",
  initialState,
  reducers: {
    loadSpamChecker: (
      currentState,
      action: PayloadAction<EmailSpamCheckerPayload>
    ) => ({
      ...currentState,
      emailSpamChecker: action.payload,
    }),
  },
});

export const toolsReducer = toolsSlice.reducer;

export const { loadSpamChecker: loadSpamCheckerActionCreator } =
  toolsSlice.actions;
