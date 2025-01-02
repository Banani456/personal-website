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
          <Link
            to="https://www.linkedin.com/in/anshri/"
            className="nav-link"
            target="_blank"
          >
            LinkedIn
          </Link>
          <Link
            to="https://github.com/ananyashri"
            className="nav-link"
            target="_blank"
          >
            Github
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Nav;
