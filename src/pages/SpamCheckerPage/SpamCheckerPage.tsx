import { useState } from "react";
import Button from "../../components/Button/Button";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import TextArea from "../../components/TextArea/TextArea";

import { RiSpam2Fill } from "react-icons/ri";

const SpamCheckerPage = () => {
  const [, setTextAreaValue] = useState<string>("");

  const handleChange = (value: string) => {
    setTextAreaValue(value);
  };

  const handleCheck = () => {};

  return (
    <section className="flex flex-col gap-16">
      <div className="flex flex-col gap-4">
        <h2 className="text-4xl font-bold text-left text-background">
          Spam Checker
        </h2>
        <p>Put the content of email to check if the content is Spam </p>
        <TextArea placeholder="Type body of email" onChange={handleChange} />

        <Button text={"Check"} onClick={handleCheck}></Button>
      </div>
      <div className="flex items-center gap-4">
        <RiSpam2Fill size={42} />
        <ProgressBar value={10} />
      </div>
    </section>
  );
};

export default SpamCheckerPage;
