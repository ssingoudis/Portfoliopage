import Home from "../components/home/home";
import About from "../components/about/about";
import Projects from "../components/projects/projects";
import Contact from "../components/contact/contact";

import { BrowserRouter, Routes, Route } from 'react-router-dom';


const Mainpage = ({ removeHashFromUrl }) => {

  return (
    <>
      <Home removeHashFromUrl={removeHashFromUrl}/>
      <About removeHashFromUrl={removeHashFromUrl}/>
      <Projects removeHashFromUrl={removeHashFromUrl}/>
      <Contact removeHashFromUrl={removeHashFromUrl}/>

      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter> */}


    </>
  )
}

export default Mainpage;