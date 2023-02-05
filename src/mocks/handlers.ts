import { rest } from "msw";
import apiEndpoints from "../routes/apiEndpoints";
import {
  mockCheckEmailSpamResponse,
  mockQuestionsResponse,
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

  rest.post(apiEndpoints.generate, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        ...mockQuestionsResponse,
      })
    );
  }),
];
