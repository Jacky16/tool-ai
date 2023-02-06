import { rest } from "msw";
import apiEndpoints from "../routes/apiEndpoints";
import {
  mockAnswer,
  mockCheckEmailSpamResponse,
  mockQuestions,
} from "./mockToolsDataResponse";

export const handlers = [
  rest.post(apiEndpoints.classify, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        ...mockCheckEmailSpamResponse,
      })
    );
  }),

  rest.post(apiEndpoints.generate, async (req, res, ctx) => {
    const { model } = await req.json();
    if (model === "medium") {
      return res(
        ctx.status(200),
        ctx.json({
          text: mockAnswer,
        })
      );
    }
    return res(
      ctx.status(200),
      ctx.json({
        text: mockQuestions,
      })
    );
  }),
];
