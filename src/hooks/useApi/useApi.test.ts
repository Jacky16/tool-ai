import { renderHook } from "@testing-library/react";
import { presetsQuestionGenerator } from "../../data/presetsTextGenerator";
import {
  mockCheckEmailSpamResponse,
  mockQuestions,
  mockQuestionsFormatted,
} from "../../mocks/mockToolsDataResponse";
import RenderWrapper from "../../mocks/RenderWrapper";
import { store } from "../../redux/store";
import {
  loadQuestionsActionCreator,
  loadSpamCheckerActionCreator,
} from "../../redux/toolsSlice/toolsSlice";
import splitQuestions from "../../utils/splitQuestions/splitQuestions";
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
    test("Then the dispatch should be called with the question formated", async () => {
      const prompt = "generate a list of 5 questions about typescript";

      const expectedAction = loadQuestionsActionCreator(mockQuestionsFormatted);

      const {
        result: {
          current: { generateText },
        },
      } = renderHook(() => useApi(), {
        wrapper: RenderWrapper,
      });

      await generateText(presetsQuestionGenerator, prompt);

      expect(dispatch).toBeCalledWith(expectedAction);
    });
  });
});
