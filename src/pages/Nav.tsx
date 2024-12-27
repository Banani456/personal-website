import { Outlet, Link } from "react-router-dom";
import logo from "../assets/A.png";
import "../styles/nav.css";

function Navbar() {
  return (
    <div>
      <nav className="navbar">
        {/* Logo */}
        <div className="nav-logo">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>

        {/* Navigation Links */}
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

export default Navbar;
