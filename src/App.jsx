import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experince from "./components/Experince";
import ProjectCard from "./components/ProjectCard";
import Education from "./components/Education";
import Footer from "./components/Footer";

function App() {

  return (
    <>
      <div className="bg-gray-100 h-full overflow-hidden">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Experince />
        <ProjectCard />
        <Education />
        <Footer />
        
      </div>
    </>
  );
}

export default App;
