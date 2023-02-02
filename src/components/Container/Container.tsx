interface ContainerProps {
  children: JSX.Element | JSX.Element[];
}
const Container = ({ children }: ContainerProps) => {
  return (
    <div className="container mx-auto max-w-6xl flex flex-col px-4">
      {children}
    </div>
  );
};

export default Container;
