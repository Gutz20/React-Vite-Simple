import { routes } from "@/helpers";
import { Link, NavLink } from "react-router-dom";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    // Navigation Version 1
    // <nav className="px-8 py-4 bg-slate-800 flex items-center justify-between">
    //   <div>
    //     <img src="vite.svg" alt="logo" width={20} height={20} />
    //   </div>
    //   <div>
    //     <ul className="flex gap-2 m-auto">
    //       {routes.map(({ label, path }) => (
    //         <li key={path}>
    //           <NavLink
    //             className={({ isActive, isPending }) =>
    //               isActive
    //                 ? "font-bold scale-105 text-white"
    //                 : isPending
    //                 ? "underline"
    //                 : "text-gray-400"
    //             }
    //             to={path}
    //           >
    //             {label.toUpperCase()}
    //           </NavLink>
    //         </li>
    //       ))}
    //     </ul>
    //   </div>
    // </nav>

    // Navigation Version 2
    <div className="bg-slate-200 px-8 py-4 w-full shadow-lg">
      <div className="container mx-auto flex flex-row items-center justify-between">
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
          <Button variant={"outline"}>
            <Link to={"/login"}>Iniciar Sesion</Link>
          </Button>
          <Button variant={"outline"}>
            <Link to={"/signup"}>Registrarse</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
