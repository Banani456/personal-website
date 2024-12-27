import { Outlet, Link } from "react-router-dom";
import logo from "../assets/A.png";
import "../styles/nav.css";

function Nav() {
  return (
    <div>
      <nav className="navbar">
        <div className="nav-logo">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>

        <div className="nav-links">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}

export default Nav;
