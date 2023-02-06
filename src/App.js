import './App.css';
import Banner from './components/Banner';
import NavBar from './components/Nav';
import About from './components/About';
import Skills from './components/Skills';
import ProjectsInfo from './components/ProjectsInfo';
import Contact from './components/Contact';
import CopyRight from './components/CopyRight';
import ExperienceAndEducation from './components/ExpAndEdu';
import Testimonials from './components/Testimonials';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <About />
      <Skills />
      <ExperienceAndEducation />
      <Projects />
      <ProjectsInfo />
      <Contact />
      <Testimonials />
      <CopyRight />
      
    </div>
  );
}

export default App;
