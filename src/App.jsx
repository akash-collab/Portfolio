import BlurBackground from './components/BlurBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Education from './components/Education';
import Internship from './components/Internship';
import Contacts from './components/Contacts';
const App = () => {
  return (
    <>
      <BlurBackground />
      <Navbar />
      <main className="antialiased overflow-x-hidden max-w-7xl mx-auto relative z-10">
        <Navbar />
        <Hero />
        <Projects />
        <About />
        <Education />
        <Internship />
        <Contacts />
      </main>
    </>
  );
};

export default App;