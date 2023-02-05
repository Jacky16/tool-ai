import axios from "axios";
import { useDispatch } from "react-redux";
import emailExamples from "../../data/emailExamples";
import environment from "../../environment";
import { loadSpamPercentageActionCreator } from "../../redux/toolsSlice/toolsSlice";
import { setIsLoadingActionCreator } from "../../redux/uiSlice/uiSlice";
import apiEndpoints from "../../routes/apiEndpoints";
import { EmailClassificationDataResponse } from "../../types/types";

const useApi = () => {
  const { apiBearer } = environment;

  const dispatch = useDispatch();

  const checkEmailSpam = async (emailContent: string) => {
    dispatch(setIsLoadingActionCreator(true));

    const response = axios.post<EmailClassificationDataResponse>(
      apiEndpoints.classify,
      {
        headers: {
          accept: "application/json",
          "content-type": "application/json",
          authorization: `Bearer ${apiBearer}`,
        },
        inputs: [emailContent],
        examples: emailExamples,
      }
    );

    const {
      data: { classifications },
    } = await response;

    const [emailClassification] = classifications;

    const { confidence } = emailClassification;

    dispatch(loadSpamPercentageActionCreator(confidence));

    dispatch(setIsLoadingActionCreator(false));
  };

  return {
    checkEmailSpam,
  };
};

export default useApi;
