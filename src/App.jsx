import './style.css';
import Hero from './hero.jsx';
import Skills from './skills.jsx';
import Header from './header.jsx';
import EducationExperience from './edu&exp.jsx';

function App() {
  

  return (
    <div className="container">
      <Header />
      <Hero />
      <Skills />
      <EducationExperience />
    </div>
  );
}

export default App;