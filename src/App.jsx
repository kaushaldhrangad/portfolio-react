import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-gray-100 h-full">
        <Navbar />
        <Hero />
        <About />
        <Skills />
      </div>
    </>
  );
}

export default App;
