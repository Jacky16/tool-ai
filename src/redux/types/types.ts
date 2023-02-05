export interface ToolsState {
  emailSpamChecker: {
    confidence: number;
    prediction: string;
  };
}

export interface UIState {
  isLoading: boolean;
}

export interface EmailSpamCheckerPayload {
  confidence: number;
  prediction: string;
}
