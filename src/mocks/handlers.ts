import { rest } from "msw";
import apiEndpoints from "../routes/apiEndpoints";
import { mockCheckEmailSpamResponse } from "./mockToolsDataResponse";

export const handlers = [
  rest.post(apiEndpoints.classify, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        ...mockCheckEmailSpamResponse,
      })
    );
  }),
];
