import { Link } from "react-router-dom";
import logo from "../assets/A.png";
import "../styles/nav.css";

function Nav() {
  return (
    <>
      <nav className="navbar">
        <div className="nav-logo">
          <Link to="/">
            <img src={logo} className="button" alt="Logo" />
          </Link>
        </div>

        <div className="nav-links">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Nav;
