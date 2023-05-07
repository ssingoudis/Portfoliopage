//import styles
import './projects.css'

//import icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'

//import data
import { projects } from '../../data'

//import components
import BasicModal from '../modal/modal'
import PixaBayAPI from '../modal/pixabay-modal'
import WeatherApp from '../modal/weatherApp-modal'
import MagicMemory from '../modal/magicMemory-modal'
import Portfolio from '../modal/portfolio-modal'
import Hotel from '../modal/hotel-modal'
import Restaurant from '../modal/restaurant-modal'


const Projects = () => {

  return (
    <div id='projects' className='projects'>
      <div className='container'>
        <div className='top-wrapper'>
          <FontAwesomeIcon icon={faCode} className='code-icon' />
          <h1> Apps I've Built</h1>
          <hr className='heading' />
          <p className='heading-description'>Building projects is the most practical way to learn anything. Here you can see some of my personal and client projects that I have created, with each project containing its own case study.</p>
        </div>
        <div className='bottom-wrapper'>
          {projects.map((project) => (
            // eslint-disable-next-line
            <a key={project.id}>
              <div className='project-wrapper'>
                <img
                  alt="gallery"
                  className="project-image"
                  src={project.image}
                />
                <div className='project-description-wrapper'>
                  <h2>
                    {project.subtitle}
                  </h2>
                  <h1>
                    {project.title}
                  </h1>
                  <p className='project-description'>
                    {project.description}
                  </p>
                  {project.id === 1 && <PixaBayAPI />}
                  {project.id === 2 && <WeatherApp />}
                  {project.id === 3 && <MagicMemory />}
                  {project.id === 4 && <Portfolio />}
                  {project.id === 5 && <Hotel />}
                  {project.id === 6 && <Restaurant />}


                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects;