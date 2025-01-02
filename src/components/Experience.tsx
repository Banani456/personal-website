import "../styles/projects.css";
import { Link } from "react-router-dom";
import see from "../assets/purpleheart.png";
import wire from "../assets/wire.png";
import plug from "../assets/plug.png";

function Experience() {
  return (
    <div id="page">
      <h1>experience</h1>
      <ul className="list">
        {/* 1 */}
        <div className="proj">
          <div className="text">
            <Link to="https://huhjina.github.io/h2/" target="_blank">
              <img src={see} className="button" alt="See" />
            </Link>
            <li className="bullet">
              <h2>
                AI Research Assistant | Stevens’ Health and Happiness Design
                Lab, Hoboken NJ
              </h2>
              <h3>Oct 2024 - Present</h3>
            </li>
          </div>
          <div className="wire-area">
            <img src={wire} alt="Connector" />
            <ul className="desc">
              <li>
                Developed a Python application with Bard AI, Tkinter, and
                CustomTkinter to create a prompt history tracker for collecting
                scientific records of prompts for statistical analyses to
                quantify identified qualitative themes.
              </li>
              <li>
                Analyzed open-ended survey data to identify themes and patterns
                in young people's social support and miscellaneous conversations
                with LLM models.
              </li>
            </ul>
          </div>
        </div>

        {/* 2 */}
        <div className="proj">
          <div className="text">
            <Link to="https://www.stevens.edu/" target="_blank">
              <img src={see} className="button" alt="See" />
            </Link>
            <li className="bullet">
              <h2>
                Linear Algebra Student Assistant Grader | Stevens Institute of
                Technology, Hoboken NJ
              </h2>
              <h3>Sep 2024 - Present</h3>
            </li>
          </div>
          <div className="wire-area">
            <img src={wire} alt="Connector" />
            <ul className="desc">
              <li>
                Optimized time management to complete grading tasks in 2-4
                hours, consistently meeting deadlines while upholding accuracy
                and quality and tutoring select students through course content.
              </li>
              <li>
                Graded 120-130 papers per assignment, delivering precise and
                timely evaluations within a 4-6 day deadline.
              </li>
            </ul>
          </div>
        </div>

        {/* 3 */}
        <div className="proj">
          <div className="text">
            <Link
              to="https://www.stevens.edu/student-life/career-center"
              target="_blank"
            >
              <img src={see} className="button" alt="See" />
            </Link>
            <li className="bullet">
              <h2>Peer Career Coach | Stevens’ Career Center, Hoboken NJ</h2>
              <h3>Sep 2023 - Present</h3>
            </li>
          </div>
          <div className="wire-area">
            <img src={plug} alt="Connector" />
            <ul className="desc">
              <li>
                Handled front desk responsibilities while assisting students in
                booking appointments, gathering resources, and creating graphic
                templates to hang up around campus.
              </li>
              <li>
                Coached students in ameliorated resume writing techniques,
                conducted a case study on effective recruitment strategies of
                companies, and created interactive content for a seminar course.
              </li>
            </ul>
          </div>
        </div>
      </ul>
    </div>
  );
}

export default Experience;
