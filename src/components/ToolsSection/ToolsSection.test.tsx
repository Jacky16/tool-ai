import { render, screen } from "@testing-library/react";
import RenderWrapper from "../../mocks/RenderWrapper";

import ToolsSection from "./ToolsSection";

describe("Given a ToolsSection component", () => {
  describe("When it's rendered", () => {
    test("Then it should match the snapshot", () => {
      const view = render(
        <RenderWrapper>
          <ToolsSection />
        </RenderWrapper>
      );

      expect(view).toMatchSnapshot();
    });

    test("Then it should have a heading level 2 'Tools'", () => {
      const expectedHeadingName = "Tools";

      render(
        <RenderWrapper>
          <ToolsSection />
        </RenderWrapper>
      );

      const heading = screen.getByRole("heading", {
        name: expectedHeadingName,
      });

      expect(heading).toBeInTheDocument();
    });
  });
});
