import { routes } from "@/helpers";
import { Link, NavLink } from "react-router-dom";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <div className="bg-slate-200 px-8 py-4 w-full shadow-lg">
      <div className="container mx-auto flex flex-row max-sm:flex-col gap-3 items-center justify-between">
        <Link to={"/"} className="flex flex-row gap-2 items-center">
          <img src="assets/logo.png" alt="logo" className="w-20" />
          <h1 className="text-xl font-bold">EnatelPeru</h1>
        </Link>
        <div>
          <nav>
            <ul className="flex gap-8 m-auto">
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
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="flex gap-2">
          <Link to={"/login"}>
            <Button variant={"outline"}>Iniciar Sesion</Button>
          </Link>
          <Link to={"/signup"}>
            <Button variant={"outline"}>Registrarse</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
