import "./css/project.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import project1 from "../assets/project1.png"
import project2 from "../assets/project2.png"
import project3 from "../assets/project3.png"

const Project = () => {
  return (
    <section className="projects" id="projects">
      <h1 className="project-title">Featured Projects</h1>

      <div className="project-container">

        {/* Project 1 */}
        <div className="project-card">

          <div className="project-image">
            <img src={project1} alt="Project 1" />
          </div>

          <div className="project-content">

            <h2>Memory Card Match Game</h2>

            <p>
              A fun and engaging Memory Card Match Game that challenges users to find matching card pairs. Includes card flip effects, move counter, restart functionality, and a responsive user interface.
            </p>

            <div className="tech-stack">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
            </div>

            <div className="project-links">

              <a href="https://memorycardmatchgame.netlify.app/" target="_blank" rel="noreferrer">
                <FaExternalLinkAlt />
                Live Demo
              </a>
            </div>

          </div>

        </div>

        {/* Project 2 */}

        <div className="project-card">

          <div className="project-image">
            <img src={project2} alt="Project 2" />
          </div>

          <div className="project-content">

            <h2>QR Code Generator</h2>

            <p>
              A web application that generates QR codes instantly from user input using Node.js, Express.js, and the QRCode library, providing a fast and efficient way to share information.
            </p>

            <div className="tech-stack">
              <span>NodeJS</span>
              <span>Express</span>
            </div>

            <div className="project-links">
              <a href="https://github.com/PrinceRathi562006/QR-code-Generator-using-Node.js" target="_blank" rel="noreferrer">
                <FaGithub />
                Code
              </a>

              <a href="#" target="_blank" rel="noreferrer">
                <FaExternalLinkAlt />
                Live Demo
              </a>
            </div>

          </div>

        </div>

        {/* Project 3 */}

        <div className="project-card">

          <div className="project-image">
            <img src={project3} alt="Project 3" />
          </div>

          <div className="project-content">

            <h2>Interactive COVID-19 Data Visualization Dashboard</h2>

            <p>
              Developed an interactive COVID-19 data analysis dashboard using Python, Pandas, Plotly, Matplotlib, and Folium to visualize city-level trends, analyze key statistics, generate interactive charts and maps, and provide data-driven insights through an intuitive dashboard interface.
            </p>

            <div className="tech-stack">
              <span>Python</span>
              <span>Pandas</span>
              <span>NumPy</span>
              <span>Matplotlib</span>
              <span>Seaborn</span>
              <span>Plotly</span>
              <span>Folium</span>
              <span>Scikit-learn</span>
              <span>Jupyter Notebook</span>
            </div>

            <div className="project-links">
              <a href="https://github.com/PrinceRathi562006/-Case-Study-Create-interactive-dashboards-for-analyzing-city-level-COVID-19-data" target="_blank" rel="noreferrer">
                <FaGithub />
                Code
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Project;