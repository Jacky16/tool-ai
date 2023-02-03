import { useState } from "react";

interface TextAreaProps {
  placeholder: string;
  onChange(value: string): void;
}

const TextArea = ({ onChange, placeholder }: TextAreaProps) => {
  const [, setTextValue] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextValue(e.target.value);
    onChange(e.target.value);
  };

  return (
    <textarea
      className="border-2 p-2 rounded-md w-full shadow-md focus-visible:outline-primary/50 font-primary h-60"
      placeholder="Type the body of email"
      onChange={handleChange}
    ></textarea>
  );
};

export default TextArea;
