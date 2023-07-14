import React from 'react';
import './App.css';

function App() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div className="App">
      <nav className="navbar">
        <span className="logo"><u>JDK</u></span>
        <ul className="nav-links">
          <li id='#about'><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <section className="section about">
        <h1>About</h1>
       
      </section>
      <section className="section projects">
        <h1>Projects</h1>
      </section>
      <section className="section contact">
        <h1>Contact</h1>
      </section>
      
    </div>
  );
}

export default App;
