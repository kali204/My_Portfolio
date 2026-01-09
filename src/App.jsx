import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import './styles/globals.css';
import './styles/animations.css';
import About from "./components/About";
import ProofWrapper from "./components/ProofWrapper";


const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <ProofWrapper />
      <About/>
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
