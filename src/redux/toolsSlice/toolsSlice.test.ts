import { ToolsState } from "../types/types";
import { toolsReducer, loadSpamCheckerActionCreator } from "./toolsSlice";

describe("Given the toolsSlice", () => {
  describe("When receives a loadSpamChecker action", () => {
    test("Then it should return the new state with percentage '99' and prediction 'spam'", () => {
      const initialState: ToolsState = {
        emailSpamChecker: {
          prediction: "",
          confidence: 0,
        },
      };

      const action = loadSpamCheckerActionCreator({
        confidence: 99,
        prediction: "spam",
      });

      const expectedState: ToolsState = {
        emailSpamChecker: {
          prediction: "spam",
          confidence: 99,
        },
      };

      const newState = toolsReducer(initialState, action);

      expect(newState).toEqual(expectedState);
    });
  });
});
