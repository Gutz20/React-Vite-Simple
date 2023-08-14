import { Footer, Navbar } from "..";
import { Outlet } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import "react-toastify/dist/ReactToastify.css";

const Layout = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="container max-w-7xl mx-auto h-full">
        <Outlet />
      </div>
      <Footer />
      <Toaster />
    </main>
  );
};

export default Layout;
