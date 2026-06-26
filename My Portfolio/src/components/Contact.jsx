import linkedinIcon from "../assets/linkedIn-icon.jpg";
import githubIcon from "../assets/gitHub-icon.png";
import "./css/Contact.css";

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <h1>Let's Connect</h1>

        <p className="contact-text">
          I'm actively seeking internship and entry-level opportunities where I
          can apply my MERN Stack skills, contribute to real-world projects, and
          continue growing as a Full Stack Developer.
        </p>

        <div className="contact-buttons">
          <a href="mailto:princerathi674@gmail.com" className="contact-btn">
            📩 princerathi674@gmail.com
          </a>

          <a href="tel:+919518190791" className="contact-btn">
            📞 +91 9518190791
          </a>
        </div>

        <div className="social-links">
          <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noreferrer">
            <img src={linkedinIcon} alt="LinkedIn" />
          </a>

          <a href="https://github.com/your-github" target="_blank" rel="noreferrer">
            <img src={githubIcon} alt="GitHub" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;