import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import TextArea from "./TextArea";

describe("Given a TextArea component", () => {
  describe("When it receives 'Type the body of email' as a placeholder", () => {
    test("Then it should display a placeholder", () => {
      const placeholder = "Type the body of email";

      render(<TextArea placeholder={placeholder} onChange={() => {}} />);
      expect(screen.getByPlaceholderText(placeholder)).toBeInTheDocument();
    });
  });

  describe("When the user types 'Hello World' in the textarea", () => {
    test("Then it should display 'Hello World' in the textarea", async () => {
      const placeholder = "Type the body of email";
      const expectedInputText = "Hello World";

      let inputText = "";

      render(
        <TextArea
          placeholder={placeholder}
          onChange={(value) => {
            inputText = value;
          }}
        />
      );
      const textarea = screen.getByRole("textbox");

      await userEvent.type(textarea, expectedInputText);

      expect(inputText).toBe(expectedInputText);
    });
  });
});
