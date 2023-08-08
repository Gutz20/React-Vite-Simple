import { routes } from "@/helpers";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="p-4 flex">
      <ul className="flex gap-2 w-[90rem] m-auto">
        {routes.map(({ label, path }) => (
          <li key={path}>
            <NavLink
              className={({ isActive, isPending }) =>
                isActive
                  ? "font-bold scale-105"
                  : isPending
                  ? "underline"
                  : "text-gray-400"
              }
              to={path}
            >
              {label.toUpperCase()}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
