import React from 'react';
import './App.css';
import NavBar from './Components/Nav/NavBar.js';
import Main from './Components/Main/Main.js';
import Bio from './Components/Bio/Bio.js';
import Experience from './Components/Experience/Experience.js';
import Programming from './Components/Programming/Programming';
import Projects from './Components/Projects/Projects';
import Socials from './Components/Socials/Socials.js';
import ContactForm from './Components/Contact.js/Contact';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Socials />
      <Main />
      <Bio />
      <Experience />
      <Programming />
      <Projects />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
