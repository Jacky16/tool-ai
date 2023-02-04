import { UIState } from "../types/types";
import { setIsLoadingActionCreator, uiReducer } from "./uiSlice";

describe("Given the uiSlice", () => {
  describe("When it receives a action 'setIsLoading' with payload 'true'", () => {
    test("Then it should return a state with isLoading equal to 'true'", () => {
      const initialState: UIState = {
        isLoading: false,
      };

      const setIsLoadingAction = setIsLoadingActionCreator(true);
      const newState = uiReducer(initialState, setIsLoadingAction);

      expect(newState.isLoading).toBe(true);
    });
  });
});
