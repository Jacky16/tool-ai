import { useDispatch } from "react-redux";
import emailExamples from "../../data/emailExamples";
import environment from "../../environment";
import { loadSpamCheckerActionCreator } from "../../redux/toolsSlice/toolsSlice";
import { setIsLoadingActionCreator } from "../../redux/uiSlice/uiSlice";
import apiEndpoints from "../../routes/apiEndpoints";
import { EmailClassificationDataResponse } from "../../types/types";

const useApi = () => {
  const { apiBearer } = environment;

  const dispatch = useDispatch();

  const checkEmailSpam = async (emailContent: string) => {
    dispatch(setIsLoadingActionCreator(true));

    const response = await fetch(apiEndpoints.classify, {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        authorization: `BEARER ${apiBearer}`,
      },
      body: JSON.stringify({
        inputs: [emailContent],
        examples: emailExamples,
        truncate: "END",
      }),
    });

    const data = await response.json();

    const { classifications } = data as EmailClassificationDataResponse;

    const [emailClassification] = classifications;

    const { confidence, prediction } = emailClassification;

    dispatch(
      loadSpamCheckerActionCreator({
        confidence,
        prediction,
      })
    );

    dispatch(setIsLoadingActionCreator(false));
  };

  return {
    checkEmailSpam,
  };
};

export default useApi;
