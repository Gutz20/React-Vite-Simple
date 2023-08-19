import { Link } from "react-router-dom";

const NavbarAdmin = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to={"/dashboard"}>Dashboard</Link>
        </li>
        <li>
          <Link to={"./admin"}>Admin</Link>
        </li>
        <li>
          <Link to={"./analytics"}>Analytics</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavbarAdmin;
