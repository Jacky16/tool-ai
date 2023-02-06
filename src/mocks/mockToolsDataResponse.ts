import { EmailClassificationDataResponse } from "../hooks/types/types";
import splitQuestions from "../utils/splitQuestions/splitQuestions";

export const mockCheckEmailSpamResponse: EmailClassificationDataResponse = {
  classifications: [
    {
      confidence: 0.9999999,
      prediction: "spam",
    },
  ],
};

export const mockQuestions =
  "\nWhat is TypeScript?\nHow is TypeScript different from JavaScript?\nWhat are the benefits of using TypeScript?\nHow is TypeScript used in a web application?\nWhat are the basic TypeScript concepts?";

export const mockQuestionsFormatted = splitQuestions(mockQuestions);
