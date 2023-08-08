import { Footer, Navbar } from "..";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <main>
      <Navbar />
      <div className="w-full p-4 2xl:p-0 2xl:w-[90rem] m-auto">
        <Outlet />
      </div>
      <Footer />
    </main>
  );
};

export default Layout;
