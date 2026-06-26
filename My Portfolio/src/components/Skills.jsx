import "./css/skills.css";

import {
  FaReact,
  FaGitAlt,
  FaGithub,
  FaBootstrap,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaNodeJs,
  FaDatabase,
  FaCode,
} from "react-icons/fa";

import {
  SiMongodb,
  SiMysql,
  SiPostman,
  SiVite,
} from "react-icons/si";

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <h1 className="skills-title">Technical Skills</h1>

      <div className="skills-container">

        {/* Frontend */}
        <div className="skill-card">
          <h2>
            <FaReact className="card-icon" />
            Frontend
          </h2>

          <div className="skill-tags">
            <span><FaHtml5 /> HTML5</span>
            <span><FaCss3Alt /> CSS3</span>
            <span><FaJsSquare /> JavaScript</span>
            <span><FaReact /> React.js</span>
            <span><FaBootstrap /> Bootstrap</span>
            <span>Responsive Design</span>
          </div>
        </div>

        {/* Backend */}
        <div className="skill-card">
          <h2>
            <FaNodeJs className="card-icon" />
            Backend
          </h2>

          <div className="skill-tags">
            <span><FaNodeJs /> Node.js</span>
            <span>Express.js</span>
            <span>REST API</span>
            <span>JWT Authentication</span>
            <span>MVC Architecture</span>
          </div>
        </div>

        {/* Database */}
        <div className="skill-card">
          <h2>
            <FaDatabase className="card-icon" />
            Database
          </h2>

          <div className="skill-tags">
            <span><SiMongodb /> MongoDB</span>
            <span>Mongoose</span>
            <span><SiMysql /> MySQL</span>
          </div>
        </div>

        {/* Programming Languages */}
        <div className="skill-card">
          <h2>
            <FaCode className="card-icon" />
            Programming
          </h2>

          <div className="skill-tags">
            <span>C++</span>
            <span><FaJsSquare /> JavaScript</span>
            <span>SQL</span>
          </div>
        </div>

        {/* Tools */}
        <div className="skill-card">
          <h2>
            <FaGitAlt className="card-icon" />
            Tools & Platforms
          </h2>

          <div className="skill-tags">
            <span><FaGitAlt /> Git</span>
            <span><FaGithub /> GitHub</span>
            <span>VS Code</span>
            <span><SiPostman /> Postman</span>
            <span><SiVite /> Vite</span>
            <span>npm</span>
          </div>
        </div>

        {/* Currently Learning */}
        <div className="skill-card">
          <h2>
            <FaCode className="card-icon" />
            Currently Learning
          </h2>

          <div className="skill-tags">
            <span>Data Structures & Algorithms</span>
            <span>Python</span>
            <span>Data Analytics</span>
            <span>Problem Solving</span>
            <span>System Design Basics</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;