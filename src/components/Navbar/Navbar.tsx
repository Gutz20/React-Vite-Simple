import { routes } from "@/helpers";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="px-8 py-4 bg-slate-800 flex items-center justify-between">
      <div>
        <img src="vite.svg" alt="logo" width={20} height={20} />
      </div>
      <div>
        <ul className="flex gap-2 m-auto">
          {routes.map(({ label, path }) => (
            <li key={path}>
              <NavLink
                className={({ isActive, isPending }) =>
                  isActive
                    ? "font-bold scale-105 text-white"
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
      </div>
    </nav>
  );
};

export default Navbar;
