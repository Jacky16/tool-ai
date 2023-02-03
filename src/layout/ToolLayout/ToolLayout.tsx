import Container from "../../components/Container/Container";
import ToolsNavBar from "../../components/ToolsNavbar/ToolsNavBar";

interface ToolLayoutProps {
  children: JSX.Element | JSX.Element[];
}
const ToolLayout = ({ children }: ToolLayoutProps) => {
  return (
    <div className="flex-1 flex flex-col bg-tertiary">
      <ToolsNavBar />
      <Container>{children}</Container>
    </div>
  );
};

export default ToolLayout;
