//import styles
import './usecase.css'

import { projects } from '../../data'

const Usecase = ({ projects }) => {
  return (
    <div className='usecase'>
      <div className='container'>
        <h1>Project Name</h1>
        <p>This page contains the case study of Dopefolio Open-Source Project which includes the Project Overview, Tools Used and Live Links to the official product.</p>
        <button>Project Link</button>
        <hr/>
        <img style={{padding:'10px'}} src="https://i.ibb.co/hHFK2hF/Taverna-Mythos-Mockup.jpg" alt="" />
        <hr/>
        <h2>Project Overview</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed, libero explicabo? Quo minima dolore facere amet soluta doloribus repellat eaque ullam nobis unde. Officia nobis exercitationem porro totam impedit excepturi tenetur suscipit eos necessitatibus! Delectus sed alias consequuntur quod in numquam eveniet veritatis reiciendis mollitia asperiores fugiat vitae quibusdam id esse quam, ipsam, amet minus sit, blanditiis accusantium facere. Totam voluptas facere ab obcaecati molestias aperiam sed quaerat repellendus velit? Saepe dolorem quod nulla dolore veritatis animi dolores autem minima et odit repellendus, ducimus maiores tempora officia debitis cum repellat, eligendi omnis facere quam, rem commodi qui aliquid assumenda. Nemo!</p>
        <h2>Tools used</h2>
        <p>tools + logos?</p>
        <h2>see live</h2>
        <button>Project Link</button>
        <button>back to homepage</button>
        <hr/>
      </div>
    </div>
  )
}

export default Usecase;