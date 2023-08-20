import { Outlet } from "react-router-dom";
import { FooterAdmin, NavbarAdmin } from "..";

const LayoutAdmin = () => {
  return (
    <div>
      <NavbarAdmin />
      <Outlet />
      <FooterAdmin />
    </div>
  );
};

export default LayoutAdmin;
