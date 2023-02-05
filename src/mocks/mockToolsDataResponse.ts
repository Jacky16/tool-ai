import { EmailClassificationDataResponse } from "../types/types";

export const mockCheckEmailSpamResponse: EmailClassificationDataResponse = {
  classifications: [
    {
      confidence: 0.9999999,
      prediction: "spam",
    },
  ],
};
