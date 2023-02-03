interface ButtonProps {
  text: string;
  onClick(): void;
}

const Button = ({ text, onClick }: ButtonProps) => {
  return (
    <button
      className="border-2 bg-primary rounded-sm p-2 text-xl font-semibold border-background md:w-56 md:self-center hover:bg-primary/50"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
