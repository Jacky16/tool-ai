interface ButtonProps {
  text: string;
  disabled?: boolean;
  onClick(): void;
}

const Button = ({ text, disabled, onClick }: ButtonProps) => {
  return (
    <button
      className="border-2 bg-primary rounded-sm p-2 text-xl font-semibold border-background md:w-56 md:self-center hover:bg-primary/50 disabled:bg-primary/30"
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
