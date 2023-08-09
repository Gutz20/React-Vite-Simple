import { Footer, Navbar } from "..";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <main>
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
};

export default Layout;
