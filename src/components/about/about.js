//import styles
import './about.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons'
import Stavros_Singoudis_Logo from '../../img/Stavros_Singoudis_Logo.JPG'

//import data
import { skills } from '../../data';


const About = () => {

  return (
    <div id='about' className='about'>
      <img
        src={Stavros_Singoudis_Logo}
        alt=""
        className='rotating-logo' />
      <h1>Skills & Technologies</h1>
      <hr className='heading' />
      <div className='divider'>
        <div className='left-side'>
          <h2>About me</h2>

          <p className='heading-text'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br />
            Nisi sit ipsa delectus eum quo voluptas aspernatur <br />
            accusantium distinctio possimus est. <br /> <br />
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br />
            Nisi sit ipsa delectus eum quo voluptas aspernatur <br />
            accusantium distinctio possimus est. <br /> <br />
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br />
            Nisi sit ipsa delectus eum quo voluptas aspernatur <br />
            accusantium distinctio possimus est. <br /> <br />
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br />
            Nisi sit ipsa delectus eum quo voluptas aspernatur <br />
            accusantium distinctio possimus est.</p>
          {/* <button onClick={handleClickProjects}>Projects</button> */}
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