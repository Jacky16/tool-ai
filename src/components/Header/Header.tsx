import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex justify-center">
      <Link to="/">
        <h1 className="text-6xl text-tertiary font-extrabold">ToolAI</h1>
      </Link>
    </header>
  );
};

export default Header;
