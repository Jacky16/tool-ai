import { Question } from "../../types/types";

export interface ToolsState {
  emailSpamChecker: {
    confidence: number;
    prediction: string;
  };

  questions: Question[];
}

export interface UIState {
  isLoading: boolean;
}

export interface EmailSpamCheckerPayload {
  confidence: number;
  prediction: string;
}
