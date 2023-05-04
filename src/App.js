import React from 'react';

//import styles
import './App.css';

//import components
import Mainpage from './pages/mainpage';
import Navbar from './components/navbar/navbar';
import Home from './components/home/home';
import Footer from './components/footer/footer';
import Contact from './components/contact/contact';
import Projects from './components/projects/projects';
import About from './components/about/about';
import Usecase from './components/usecase/usecase';

import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {

  return (
    <div className="App">

<BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="/usecase" element={<Usecase />} />
        </Routes>      
      <Footer />
</BrowserRouter>
      {/* <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/usecase" element={<Usecase />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter> */}
    </div>
  );
}

export default App;