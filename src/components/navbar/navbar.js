//import styles
import { useState } from 'react';
import './navbar.css'
import Stavros_Singoudis_Logo from '../../img/Stavros_Singoudis_Logo.JPG'

// import Stavros_Singoudis_Logo from '../../../public/img/Stavros_Singoudis_Logo.JPG'

const Navbar = ({ removeHashFromUrl }) => {

  const [isActive, setIsActive] = useState(false)

  const handleClick = () => {
    setIsActive(!isActive)
  }

  const handleClose = () => {
    setIsActive(false)
  }

  //navigation links
  const handleClickHome = () => {
    const section = document.getElementById('home');
    section.scrollIntoView();
    removeHashFromUrl();
  };

  const handleClickAbout = () => {
    const section = document.getElementById('about');
    section.scrollIntoView();
    removeHashFromUrl();
  };

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

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
      transition: '.3s'
    });
  }

  return (
    <div className='navbar'>
      <div className="container">
        <div className="left-side">
          <div>
            <img
              src={Stavros_Singoudis_Logo}
              alt="Logo"
              onClick={scrollToTop} />
          </div>
          <span
            className='name'
            onClick={scrollToTop}>Stavros Singoudis</span>
        </div>
        <div className="right-side">
          <nav className={isActive ? 'active' : ''}>
            <ul>
              <li><button
                className='navigationBT'
                onClick={() => { handleClickHome(); removeHashFromUrl(); }}>
                Home
              </button></li>
              <li><button
                className='navigationBT'
                onClick={() => { handleClickAbout(); removeHashFromUrl(); }}>
                About
              </button></li>
              <li><button
                className='navigationBT'
                onClick={() => { handleClickProjects(); removeHashFromUrl(); }}>
                Projects
              </button></li>
              <li><button
                className='navigationBT'
                onClick={() => { handleClickContact(); removeHashFromUrl(); }}>
                Contact
              </button></li>
            </ul>

            <div
              className={`hamburger-menu ${isActive ? 'active' : ''}`}
              onClick={handleClick}>
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </div>

            <div className={isActive ? 'menu-items active' : 'menu-items'}>
              <button
                className='navigationBT'
                onClick={() => { handleClickHome(); handleClose(); removeHashFromUrl(); }}>
                Home
              </button>
              <button
                className='navigationBT'
                onClick={() => { handleClickAbout(); handleClose(); removeHashFromUrl(); }}>
                About
              </button>
              <button
                className='navigationBT'
                onClick={() => { handleClickProjects(); handleClose(); removeHashFromUrl(); }}>
                Projects
              </button>
              <button
                className='navigationBT'
                onClick={() => { handleClickContact(); handleClose(); removeHashFromUrl(); }}>
                Contact
              </button>
            </div>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Navbar;