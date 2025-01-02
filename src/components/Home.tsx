import { Link } from "react-router-dom";
import "../styles/home.css";
import "../styles/nav.css";
import me from "../assets/Ananya cartoon.png";
import projbtn from "../assets/projectsbtn.png";
import expbtn from "../assets/experience.png";
import resumebtn from "../assets/resume.png";
import Projects from "./Projects";
import Experience from "./Experience";

function Home() {
  const scrollToProj = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToExp = () => {
    const element = document.getElementById("exp");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header>
        <div>
          <h1 id="hiananya">Hi I'm Ananya!</h1>
          <p>
            I'm a developer and upcoming entrepreneur, currently studying
            Computer Science and Applied Mathematics at the Stevens Institute of
            Technology. I develop web applications in my free time, tackling
            various societal issues. I've recently been working with AI and
            getting into game development.
          </p>
        </div>
        <img src={me} id="me"></img>
      </header>

      <div id="buttons">
        <img
          src={projbtn}
          onClick={scrollToProj}
          className="button"
          id="projs"
        ></img>
        <img
          src={expbtn}
          onClick={scrollToExp}
          className="button"
          id="projs"
        ></img>

        <Link
          to="https://docs.google.com/document/d/1vfTR0X_5gAJ6bh4KdtKQfXaeGVoSVyJ3tqgekzQRZ_w/edit?usp=sharing"
          target="_blank"
        >
          <img src={resumebtn} className="button" id="projs"></img>
        </Link>
      </div>
      <div id="exp">
        <Experience />
      </div>
      <div id="projects">
        <Projects />
      </div>
    </>
  );
}

export default Home;
