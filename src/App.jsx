import './style.css';
import Hero from './hero.jsx';
import Skills from './skills.jsx';
import Header from './header.jsx';
import Education from './edu.jsx';
import Experience from './experience.jsx';

function App() {
  

  return (
    <div className="container">
      <Header />
      <Hero />
      <Skills />
      <Education />
      <Experience />
    </div>
  );
}

export default App;