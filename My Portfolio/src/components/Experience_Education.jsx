import "./css/Experience_Education.css";
import { FaGraduationCap } from "react-icons/fa";

const Experience_Education = () => {
  return (
    <section className="education" id="education">

      <h1 className="education-title">Education</h1>

      <div className="timeline">

        {/* Education 1 */}

        <div className="timeline-item">

          <div className="timeline-icon">
            <FaGraduationCap />
          </div>

          <div className="timeline-content">

            <span className="timeline-date">
              June 2026 - Present
            </span>

            <h2>Advance Full Stack Web Development Intern</h2>

            <h3>Geeta Technical Hub</h3>

            <p>
              Developing full-stack web applications using the MERN Stack (MongoDB, Express.js, React.js, and Node.js). Gaining hands-on experience in REST API development, responsive UI design, database integration, Git/GitHub version control, and real-world project development while collaborating in an industry-oriented learning environment.

            </p>

          </div>

        </div>

        {/* Education 2 */}

        <div className="timeline-item">

          <div className="timeline-icon">
            <FaGraduationCap />
          </div>

          <div className="timeline-content">

            <span className="timeline-date">
              2024 – Present
            </span>

            <h2>Bachelor of Technology (B.Tech) – Computer Science & Engineering</h2>

            <h3>Geeta University, Panipat</h3>

            <p>
              Currently pursuing a B.Tech in Computer Science & Engineering with a focus on Data Structures & Algorithms, Database Management Systems, Operating Systems, Computer Networks, and Full Stack Web Development. Actively participating in technical projects, hackathons, and internships.
            </p>

          </div>

        </div>

        {/* Education 3 */}

        <div className="timeline-item">

          <div className="timeline-icon">
            <FaGraduationCap />
          </div>

          <div className="timeline-content">

            <span className="timeline-date">
              June 2025 – July 2025
            </span>

            <h2>Basic DSA in C++ Intern</h2>

            <h3>Geeta Technical Hub</h3>

            <p>
              Completed hands-on training in Data Structures and Algorithms using C++. Strengthened problem-solving skills by implementing arrays, linked lists, stacks, queues, trees, recursion, sorting, searching, and basic algorithmic techniques.
            </p>

          </div>

        </div>

        {/* Education 4 */}

        <div className="timeline-item">

          <div className="timeline-icon">
            <FaGraduationCap />
          </div>

          <div className="timeline-content">

            <span className="timeline-date">
              May 2023 - April 2024
            </span>

            <h2>Intermediate</h2>

            <h3>CBSE Board</h3>

            <p>
              Completed Intermediate (Class 12) with a strong foundation in Mathematics, Physics, and Computer Science under the CBSE curriculum. Developed analytical thinking, problem-solving abilities, and a keen interest in programming and technology, which laid the groundwork for pursuing Computer Science and Full Stack Web Development.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Experience_Education;