interface ProgressBarProps {
  value: number;
}

const ProgressBar = ({ value }: ProgressBarProps) => {
  return (
    <div className="w-full">
      <div className="bg-background relative h-7 w-full rounded-2xl shadow-md">
        <div
          className="bg-primary absolute top-0 left-0 h-full rounded-2xl"
          style={{ width: `${value}%` }}
        >
          <span className="bg-background absolute -right-4 bottom-full mb-2 rounded-sm py-1 px-2 text-xs font-semibold text-white">
            <span className="bg-primary absolute bottom-[-2px] left-1/2 -z-10 h-2 w-2 -translate-x-1/2 rotate-45 rounded-sm"></span>
            {value}%
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
