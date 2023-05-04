//import styles
import './projects.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'

//import data
import { projects } from '../../data'

const Projects = () => {
  return (
    <div id='projects' className='projects'>
      <div className='container'>
        <div>
          <FontAwesomeIcon icon={faCode} className='code-icon'/>
          <h1> Apps I've Built</h1>
          <hr className='heading'/>
          <p className='heading-description'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br />
            Explicabo facilis repellat ab cupiditate alias <br />
            vero aliquid obcaecati quisquam fuga dolore.</p>
        </div>
        <div className='bottom-wrapper'>
          {projects.map((project) => (
            <a
              href={project.link}
              target='_blank'
              key={project.id}>
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