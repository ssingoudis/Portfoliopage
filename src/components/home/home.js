//import styles
import './home.css'

// import Stavros_Singoudis_Logo from '../../img/Stavros_Singoudis_Logo.JPG'


const Home = () => {

  const handleClickAbout = () => {
    const section = document.getElementById('about');
    section.scrollIntoView();
  };

  const handleClickProjects = () => {
    const section = document.getElementById('projects');
    section.scrollIntoView();
  };


  return (
    <div id='home' className='home'>
      <div className='container'>
        <div className='wrapper'>
          <h1>Hey, I'm Stavros</h1>

          <p>A Software Enthusiast, UI Designer & passionate Front-End focused Web Developer.
            My Design creates great User Experiences and leads to the overall success of the Product.</p>

          <button onClick={handleClickProjects}>Projects</button>
          <div className='mouse-container' onClick={handleClickAbout}>
            <div className='mouse'></div>
          </div>
        </div>
      </div>


    </div>
  )
}


export default Home;