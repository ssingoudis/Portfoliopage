//import styles
import './usecase.css'

import { projects } from '../../data'

const Usecase = () => {
  return (
    <div className='usecase'>
      <div className='container'>
        {projects.map((project) => (
          <p>hi</p>
        ))}
        <div className='upper-wrapper'>
          <div className='upper-left-wrapper'>
            <p>test</p>
          </div>
          <div className='upper-right-wrapper'>
            <p>hi rechts</p>
            <img 
              src={projects.title} 
              alt="" />
          </div>
        </div>
        <div className='lower-wrapper'>
        </div>
      </div>
    </div>
  )
}

export default Usecase;