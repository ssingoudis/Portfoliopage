import React from 'react';

//import styles
import './App.css';

//import components
import Navbar from './components/navbar/navbar';
import Home from './components/home/home';
import Footer from './components/footer/footer';
import Contact from './components/contact/contact';
import Projects from './components/projects/projects';
import About from './components/about/about';


function App() {

  return (
    <div className="App">

    <Navbar />
    <Home />
    <About />

    <Projects />
    <Contact />
    <Footer />

    </div>
  );
}

export default App;