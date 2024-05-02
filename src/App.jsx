import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experince from "./components/Experince";
import Projects from "./components/Projects";

function App() {

  return (
    <>
      <div className="bg-gray-100 h-full">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Experince />
        <Projects />
        
      </div>
    </>
  );
}

export default App;
