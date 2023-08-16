import { Footer, Navbar } from "..";
import { Outlet } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import "react-toastify/dist/ReactToastify.css";

const Layout = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Outlet />
      <Footer />
      <Toaster />
    </main>
  );
};

export default Layout;
