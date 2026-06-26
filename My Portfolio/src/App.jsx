
import AboutMe from "./components/AboutMe.jsx"
import Contact from "./components/Contact.jsx"
import Intro from "./components/Intro.jsx"
import Skills from "./components/Skills.jsx"
import Project from "./components/Project.jsx"
import Experience_Education from "./components/Experience_Education.jsx"
import "./App.css"

const App = () => {
  return (
    <div>
      <Intro />
      <AboutMe />
      <Skills />
      <Experience_Education />
      <Project />
      <Contact />
      <footer className="footer">
        <p>© 2026 <strong>Prince</strong>. All Rights Reserved.</p>
        <p>Designed & Developed with ❤️ using React.js</p>
      </footer>
    </div>
  )
}

export default App