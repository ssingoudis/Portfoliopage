import React from 'react';

//import styles
import './App.css';

//import components
import Mainpage from './pages/mainpage';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import Usecase from './components/usecase/usecase';

import { Routes, Route } from 'react-router-dom';


function App() {

  const removeHashFromUrl = () => {
    window.history.replaceState({}, document.title, window.location.pathname);
  }

  return (
    <div className="App">


      <Navbar removeHashFromUrl={removeHashFromUrl}/>
        <Routes>
          <Route path="/" element={<Mainpage removeHashFromUrl={removeHashFromUrl}/>} />
        </Routes>      
      <Footer removeHashFromUrl={removeHashFromUrl}/>

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