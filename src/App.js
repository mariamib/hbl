import './main.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Show from './components/Show';
import Video from './components/Video';
import Skills from './components/Skills';
import Projects from './components/Projects';
function App() {
  return (
    <>
    <Navbar/>
    <Video/>
    <Show/>
    <About/>
    <Skills/>
    <Projects/>
    </>
  );
}

export default App;
