import "./css/Intro.css";
import myImage from "../assets/myimage.jpeg";
import resume from "../assets/Prince_resume.pdf";

const Intro = () => {
  return (
    <section className="wrapper" id="home">
      <div className="intro">
        <h2>Hello, I'm</h2>
        <h1>Prince</h1>

        <h3>Aspiring MERN Stack Developer</h3>
        <h3>& Data Analytics Enthusiast</h3>

        <p>
          Passionate about building responsive and scalable web applications
          using the MERN Stack. I enjoy solving real-world problems, learning
          new technologies, and creating impactful digital experiences.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn primary">
            🚀 View Projects
          </a>

          <a href={resume} className="btn secondary" download>
            📄 Download Resume
          </a>

          <a href="#contact" className="btn contact-btn">
            📩 Contact Me
          </a>
        </div>
      </div>

      <div className="profile">
        <img src={myImage} alt="Prince" />
      </div>
    </section>
  );
};

export default Intro;