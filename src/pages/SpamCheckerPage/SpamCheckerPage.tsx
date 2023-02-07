import { useState } from "react";
import Button from "../../components/Button/Button";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import TextArea from "../../components/TextArea/TextArea";
import useApi from "../../hooks/useApi/useApi";
import { useAppSelector } from "../../redux/hooks";
import { Bars } from "react-loader-spinner";

const SpamCheckerPage = () => {
  const { checkEmailSpam } = useApi();
  const {
    tools: {
      emailSpamChecker: { prediction, confidence },
    },
    ui: { isLoading },
  } = useAppSelector((state) => state);

  const [textAreaValue, setTextAreaValue] = useState<string>("");

  const handleChange = (value: string) => {
    setTextAreaValue(value);
  };

  const handleCheck = () => {
    if (textAreaValue.length === 0) return;

    checkEmailSpam(textAreaValue);
  };

  return (
    <section className="flex flex-col gap-10">
      <div className="flex flex-col gap-4">
        <h2 className="text-4xl font-bold text-left text-background">
          Spam Checker
        </h2>
        <p>Put the content of email to check if the content is Spam </p>
        <small className="text-sm border-l-4  border-background px-2">
          You can use this{" "}
          <a
            href="https://docs.google.com/spreadsheets/d/1ADxqgNqsjstuyaG0vxd3gSFkgw5eIhf56HLxfcDFWcY/edit?usp=sharing"
            className="underline"
            target={"_blank"}
            rel="noreferrer"
          >
            examples
          </a>
        </small>
        <TextArea placeholder="Type body of email" onChange={handleChange} />

        <Button text={"Check"} onClick={handleCheck}></Button>
      </div>

      <div className="h-[38px]">
        <Bars
          height="38"
          width="38"
          color="#19121C"
          ariaLabel="bars-loading"
          wrapperClass="flex justify-center"
          visible={isLoading}
        />
      </div>
      <div className="flex flex-col gap-4">
        <ProgressBar value={confidence * 100} />
        <span className="self-center uppercase text-xl font-bold">
          {prediction}
        </span>
      </div>
    </section>
  );
};

export default SpamCheckerPage;
