import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Question } from "../../types/types";
import { EmailSpamCheckerPayload, ToolsState } from "../types/types";

const initialState: ToolsState = {
  emailSpamChecker: {
    prediction: "",
    confidence: 0,
  },
  questions: [],
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
    loadQuestions: (currentState, action: PayloadAction<Question[]>) => ({
      ...currentState,
      questions: action.payload,
    }),

    loadAnswer: (currentState, action: PayloadAction<Question>) => {
      const { questions } = currentState;
      const idQuestion = action.payload.id;

      const previousQuestions = [...questions];

      const index = previousQuestions.findIndex(
        (question) => question.id === idQuestion
      );

      previousQuestions[index] = { ...action.payload };

      return {
        ...currentState,
        questions: [...previousQuestions],
      };
    },
  },
});

export const toolsReducer = toolsSlice.reducer;

export const {
  loadSpamChecker: loadSpamCheckerActionCreator,
  loadQuestions: loadQuestionsActionCreator,
  loadAnswer: loadAnswerActionCreator,
} = toolsSlice.actions;
