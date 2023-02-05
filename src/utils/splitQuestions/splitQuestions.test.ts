import splitQuestions from "./splitQuestions";

describe("Given the splitQuestions function", () => {
  describe("When it receives a string with 3 questions", () => {
    test("Then it should return an array with 3 questions", () => {
      const questions =
        "How are you? \n How old are you? \n Where are you from?";

      const result = splitQuestions(questions);

      expect(result).toHaveLength(3);
    });
  });
});
