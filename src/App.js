import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Tools from "./components/Tools";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <main>
        <AboutMe />
        <Projects />
        <Experience />
        <Education />
        <Tools />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
