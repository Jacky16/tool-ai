import { renderHook } from "@testing-library/react";
import { mockCheckEmailSpamResponse } from "../../mocks/mockToolsDataResponse";
import RenderWrapper from "../../mocks/RenderWrapper";
import { store } from "../../redux/store";
import { loadSpamCheckerActionCreator } from "../../redux/toolsSlice/toolsSlice";
import useApi from "./useApi";

const dispatch = jest.spyOn(store, "dispatch");

describe("Given the checkEmailSpam", () => {
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
