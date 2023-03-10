import NavLinkTool from "../NavLinkTool/NavLinkTool";

const ToolsNavBar = () => {
  return (
    <nav className="flex flex-wrap justify-center list-none  bg-primary">
      <NavLinkTool to={"/tools/spam-checker"}>Spam Checker</NavLinkTool>
      <NavLinkTool to={"/tools/language-questions"}>Questions</NavLinkTool>
    </nav>
  );
};

export default ToolsNavBar;
