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
      const { question: questionText } = action.payload;

      const indexQuestionWithoutAnswer = currentState.questions.findIndex(
        (question) => question.question === questionText
      );

      const newQuestionsState = [...currentState.questions];

      newQuestionsState[indexQuestionWithoutAnswer] = action.payload;

      return {
        ...currentState,
        questions: newQuestionsState,
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
