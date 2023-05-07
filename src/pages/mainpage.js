//import components
import Home from "../components/home/home";
import About from "../components/about/about";
import Projects from "../components/projects/projects";
import Contact from "../components/contact/contact";


const Mainpage = ({ removeHashFromUrl }) => {

  return (
    <>
      <Home removeHashFromUrl={removeHashFromUrl}/>
      <About removeHashFromUrl={removeHashFromUrl}/>
      <Projects removeHashFromUrl={removeHashFromUrl}/>
      <Contact removeHashFromUrl={removeHashFromUrl}/>
    </>
  )
}

export default Mainpage;