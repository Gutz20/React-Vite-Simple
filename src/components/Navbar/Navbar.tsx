import { routes } from "@/helpers";
import { Link, NavLink } from "react-router-dom";

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
    <div className="bg-white p-8">
      <div className="container mx-auto flex flex-row items-center justify-between">
        <Link to={"/"} className="flex flex-row gap-2 items-center">
          <img src="vite.svg" alt="logo" />
          <h1 className="text-xl font-semibold">EnatelPeru</h1>
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
                    to={"/"}
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        {/* <div className="flex gap-2">
          <button
            type="button"
            className="px-4 py-1 rounded-xl font-semibold hover:outline outline-1 outline-red-500"
          >
            Sign in
          </button>
          <button
            type="button"
            className="px-4 py-1 rounded-xl font-semibold text-red-500 outline outline-1 outline-red-500"
          >
            Sign up
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;
