import { getQuestionsWithoutAnswer } from "../../mocks/factory/toolsFactory";
import { ToolsState } from "../types/types";
import {
  toolsReducer,
  loadSpamCheckerActionCreator,
  loadQuestionsActionCreator,
  loadAnswerActionCreator,
} from "./toolsSlice";

describe("Given the toolsSlice", () => {
  describe("When receives a loadSpamChecker action", () => {
    test("Then it should return the new state with percentage '99' and prediction 'spam'", () => {
      const initialState: Partial<ToolsState> = {
        emailSpamChecker: {
          prediction: "",
          confidence: 0,
        },
      };

      const action = loadSpamCheckerActionCreator({
        confidence: 99,
        prediction: "spam",
      });

      const expectedState: Partial<ToolsState> = {
        emailSpamChecker: {
          prediction: "spam",
          confidence: 99,
        },
      };

      const newState = toolsReducer(initialState as ToolsState, action);

      expect(newState).toEqual(expectedState);
    });
  });

  describe("When receives a loadQuestions action with 5 questions", () => {
    test("Then it should return the new state with the questions", () => {
      const initialState: Partial<ToolsState> = {
        questions: [],
      };

      const questions = getQuestionsWithoutAnswer(5);

      const action = loadQuestionsActionCreator(questions);

      const expectedState: Partial<ToolsState> = {
        questions,
      };

      const newState = toolsReducer(initialState as ToolsState, action);

      expect(newState).toEqual(expectedState);
    });
  });

  describe("When receives a loadAnswer action with a question", () => {
    test("Then it should return the new state with the question with the answer", () => {
      const questions = getQuestionsWithoutAnswer(5);
      const answer = "This is the answer";

      const initialState: Partial<ToolsState> = {
        questions,
      };

      const question = { ...questions[0], answer };
      questions[0] = question;

      const action = loadAnswerActionCreator(question);

      const expectedState: Partial<ToolsState> = {
        questions,
      };

      const newState = toolsReducer(initialState as ToolsState, action);

      expect(newState).toEqual(expectedState);
    });
  });
});
