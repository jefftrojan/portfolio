import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <span className="logo">Portfolio</span>
        <ul className="nav-links">
          <li id='#section1'><a href="#section1">Section 1</a></li>
          <li><a href="#section2">Section 2</a></li>
          <li><a href="#section3">Section 3</a></li>
        </ul>
      </nav>
      <section className="section section1">
        <h1>Hero Section</h1>
      </section>
      <section className="section section2">
        <h1>Projects</h1>
      </section>
      <section className="section section3">
        <h1>Experience</h1>
      </section>
      <section className="section section3">
        <h1>Contact</h1>
      </section>
    </div>
  );
}

export default App;
