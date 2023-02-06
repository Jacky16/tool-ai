import { renderHook } from "@testing-library/react";
import {
  presetAnswerGenerator,
  presetQuestionGenerator,
} from "../../data/presetsTextGenerator";
import {
  mockAnswer,
  mockCheckEmailSpamResponse,
  mockQuestionsFormatted,
} from "../../mocks/mockToolsDataResponse";
import RenderWrapper from "../../mocks/RenderWrapper";
import { store } from "../../redux/store";
import {
  loadAnswerActionCreator,
  loadQuestionsActionCreator,
  loadSpamCheckerActionCreator,
} from "../../redux/toolsSlice/toolsSlice";
import { Question } from "../../types/types";
import useApi from "./useApi";

const dispatch = jest.spyOn(store, "dispatch");

describe("Given the checkEmailSpam function", () => {
  describe("When is called with a 'This is a spam email' string", () => {
    test("Then the dispatch should be called with the confidence '0.9999999'", async () => {
      const emailContent = "This is a spam email";

      const [emailClassification] = mockCheckEmailSpamResponse.classifications;
      const expectedAction = loadSpamCheckerActionCreator({
        confidence: emailClassification.confidence,
        prediction: emailClassification.prediction,
      });

      const {
        result: {
          current: { checkEmailSpam },
        },
      } = renderHook(() => useApi(), {
        wrapper: RenderWrapper,
      });

      await checkEmailSpam(emailContent);

      expect(dispatch).toBeCalledWith(expectedAction);
    });
  });
});

describe("Given the generateText function", () => {
  describe("When is called with a prompt 'generate a list of 5 questions about typescript", () => {
    test("Then the dispatch should be called with the question formatted", async () => {
      const prompt = "generate a list of 5 questions about typescript";

      const expectedAction = loadQuestionsActionCreator(mockQuestionsFormatted);

      const {
        result: {
          current: { generateText },
        },
      } = renderHook(() => useApi(), {
        wrapper: RenderWrapper,
      });

      await generateText(presetQuestionGenerator, prompt);

      expect(dispatch).toBeCalledWith(expectedAction);
    });
  });
});

describe("Given the answerQuestions function", () => {
  describe("When is called with a question 'What is typescript?'", () => {
    test("Then the dispatch should be called with 'This is a answer'", async () => {
      const question: Question = {
        question: "What is typescript?",
      };

      const expectedAction = loadAnswerActionCreator({
        ...question,
        answer: mockAnswer,
      });

      const {
        result: {
          current: { answerQuestion },
        },
      } = renderHook(() => useApi(), {
        wrapper: RenderWrapper,
      });

      await answerQuestion(presetAnswerGenerator, question);

      expect(dispatch).toBeCalledWith(expectedAction);
    });
  });
});
