import { NavLink } from "react-router-dom";

interface NavLinkToolProps {
  to: string;
  children: React.ReactNode;
}

const NavLinkTool = ({ children, to }: NavLinkToolProps) => {
  const activeClassName =
    "flex items-center p-4 text-background text-lg hover:bg-background hover:text-tertiary font-bold underline";

  const className =
    "flex items-center p-4 text-background text-lg hover:bg-background hover:text-tertiary";

  return (
    <NavLink
      to={to}
      className={({ isActive }) => (isActive ? activeClassName : className)}
    >
      {children}
    </NavLink>
  );
};

export default NavLinkTool;
