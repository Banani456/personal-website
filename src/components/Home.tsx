import "../styles/home.css";
import "../styles/nav.css";
import me from "../assets/Ananya cartoon.png";
import projbtn from "../assets/projectsbtn.png";
import expbtn from "../assets/experience.png";
import resumebtn from "../assets/resume.png";
import Projects from "./Projects";

function Home() {
  const scrollToProj = () => {
    const element = document.getElementById("projects");
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
        <img src={expbtn} className="button" id="projs"></img>
        <img src={resumebtn} className="button" id="projs"></img>
      </div>
      <div id="projects">
        <Projects />
      </div>
    </>
  );
}

export default Home;
