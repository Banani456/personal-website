import "../styles/projects.css";
import see from "../assets/see.png";
import wire from "../assets/wire.png";
import plug from "../assets/plug.png";

function Projects() {
  return (
    <div id="page">
      <h1>projects</h1>
      <ul className="list">
        {/*1*/}
        <div className="proj">
          <div className="text">
            <img src={see} className="button" alt="See" />
            <li className="bullet">
              <h2>AI Gender-Based Medical Bias Detector (iWIH @ HackMIT)</h2>
              <h3> Sep 2024 - Oct 2024</h3>
            </li>
          </div>
          <div className="wire-area">
            <img src={wire} alt="Connector" />
            <ul className="desc">
              <li>
                Engineered a website with a ReactJS frontend and Convex backend
                to handle user requests for gender based bias detection in
                medical papers utilizing AI
              </li>
              <li>
                Supervised the full-stack team to connect user requests to
                output AI-generated statistics on parameters that define bias,
                i.e. women in studies, pronoun usage using matplotlib, OpenAI
                API, and Jupyter Notebooks
              </li>
            </ul>
          </div>
        </div>

        {/*2*/}
        <div className="proj">
          <div className="text">
            <img src={see} className="button" alt="See" />
            <li className="bullet">
              <h2>
                Lonliness Battling Picture App for the Elderly (Amorama @ iSTEM
                Hackathon)
              </h2>
              <h3>Feb 2024 - Mar 2024</h3>
            </li>
          </div>
          <div className="wire-area">
            <img src={wire} alt="Connector" />
            <ul className="desc">
              <li>
                Programmed a React Native application with account login, and
                camera access accessible through ExpoGo on Android Studio and
                iOS to battle loneliness and depression in the older population
              </li>
              <li>
                Implemented a user-centric simple app design with bold colors to
                create a simple version an image exchange app (BeReal)
              </li>
            </ul>
          </div>
        </div>

        {/*3*/}
        <div className="proj">
          <div className="text">
            <img src={see} className="button" alt="See" />
            <li className="bullet">
              <h2>
                CMS Data Surfing App (Web Application Developer Intern @ Kumon)
              </h2>
              <h3>Jun 2023 - Aug 2023</h3>
            </li>
          </div>
          <div className="wire-area">
            <img src={plug} alt="Connector" />
            <ul className="desc">
              <li>
                Created a database surfing tool using Flask and pandas to parse
                data from Kumon CMS to filter 1000s of students’ demographic
                data to identify a mail merge list of students qualified for
                discounts, prizes, and offers
              </li>
              <li>
                Developed an interactive front-end with HTML & CSS and deployed
                the site through Replit to generate CSVs
              </li>
            </ul>
          </div>
        </div>
      </ul>
    </div>
  );
}

export default Projects;
