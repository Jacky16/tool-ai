import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UIState } from "../types/types";

const initialState: UIState = {
  isLoading: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setIsLoading: (currentState, action: PayloadAction<boolean>) => ({
      ...currentState,
      isLoading: action.payload,
    }),
  },
});

export const uiReducer = uiSlice.reducer;

export const { setIsLoading: setIsLoadingActionCreator } = uiSlice.actions;
