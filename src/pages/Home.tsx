import "../styles/home.css";
import me from "../assets/Ananya cartoon.png";
import projs from "../assets/projectsbtn.png";

function Home() {
  return (
    <div>
      <header>
        <h1>Hi I'm Ananya!</h1>
        <img src={me} id="me"></img>
      </header>
      <img src={projs} id="projs"></img>
    </div>
  );
}

export default Home;
