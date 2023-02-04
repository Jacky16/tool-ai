import { ToolsState } from "../types/types";
import { loadSpamPercentageActionCreator, toolsReducer } from "./toolsSlice";

describe("Given the toolsSlice", () => {
  describe("When the setSpamPercentage action is dispatched", () => {
    test("Then the spamPercentage should be set to the payload", () => {
      const initialState: ToolsState = { spamPercentage: 0 };

      const expectedState: ToolsState = { spamPercentage: 50 };

      const action = loadSpamPercentageActionCreator(50);

      const newState = toolsReducer(initialState, action);

      expect(newState).toEqual(expectedState);
    });
  });
});
