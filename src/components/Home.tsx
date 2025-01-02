import "../styles/home.css";
import "../styles/nav.css";
import me from "../assets/Ananya cartoon.png";
import projbtn from "../assets/projectsbtn.png";
import Projects from "./Projects";

function Home() {
  const scrollToMiddle = () => {
    const element = document.getElementById("middle");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header>
        <h1>Hi I'm Ananya!</h1>
        <img src={me} id="me"></img>
      </header>

      <img
        src={projbtn}
        onClick={scrollToMiddle}
        className="button"
        id="projs"
      ></img>
      <div id="middle">
        <Projects />
      </div>
    </>
  );
}

export default Home;
