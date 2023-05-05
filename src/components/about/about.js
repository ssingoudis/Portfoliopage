//import styles
import './about.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons'
import Stavros_Singoudis_Logo from '../../img/Stavros_Singoudis_Logo.JPG'

//import data
import { skills } from '../../data';


const About = ({ removeHashFromUrl }) => {

  const handleClickProjects = () => {
    const section = document.getElementById('projects');
    section.scrollIntoView();
    removeHashFromUrl();
  };

  const handleClickContact = () => {
    const section = document.getElementById('contact');
    section.scrollIntoView();
    removeHashFromUrl();
  };

  return (
    <div id='about' className='about'>
      <div className='rotating-logo-container'>
      <img
        src={Stavros_Singoudis_Logo}
        alt=""
        className='rotating-logo' />
        </div>
      <h1>Skills & Technologies</h1>
      <hr className='heading' />
      <div className='divider'>
        <div className='left-side'>
          <h2>About me</h2>

          <p className='heading-text'>I'm a <b>Software Enthusiast</b>, UI Designer & passionate Front-End focused Web Developer. My Design creates <b>great User Experiences</b> and leads to the overall success of the Product.<br /> <br />
            I hold degrees in business informatics and <b>IT product management</b>, as well as professional experience as an IT consultant, requirements engineer, <b>product owner</b> and project manager.<br /><br/>
            At the turn of the year 2022, I decided to take a one-year trip through South America to see something of the world, unwind my soul and refresh my <b>programming skills</b> again.<br /> <br />
            Since then, I've made some websites but mostly worked on my own <button className='navigationBT' onClick={handleClickProjects}>projects</button>, since, as we all know, building projects is the most convenient way to learn.<br /> <br />
            I am specialized in HTML, CSS & JavaScript and use as frameworks mainly <b>ReactJS</b>, sometimes TailwindCSS. As operating system I prefer <b>Windows</b>, while I feel most comfortable with <b>Git</b> in terms of version control systems.<br /><br />
            Right now, <b>I am open to job opportunities</b> where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience, don't hesitate to <b>contact me</b>.</p>
          <button className='contact-button' onClick={handleClickContact}>Contact</button>
        </div>
        <div className='right-side'>
          <h2>My Skills</h2>
          <div className='container'>
            {skills.map((skill) => (
              <div key={skill.title} className='skill'>
                <div
                  className='skill-wrapper'
                  onClick={() => window.open(skill.link)}>
                  <FontAwesomeIcon
                    icon={faSquareCheck}
                    className='faSquareCheck' />
                  <span>{skill.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default About; 