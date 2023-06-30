import './App.css';
import Home from './Portfolio/Home';
import About from './Portfolio/About';
import Resume from './Resume/Resume';
import Skill from './Resume/Skill';
import Project from './Project/Project';

import Contact from './Contact/Contact';
import Footer from './Contact/Footer';

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Resume />
      <Skill />
      <Project/>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
