//import styles
import { useState, useEffect } from 'react';
import './navbar.css'

const Navbar = () => {

  const [isActive, setIsActive] = useState(false)

  const handleClick = () => {
    setIsActive(!isActive)
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsActive(false);
      }
    };

    //add Eventlistener
    window.addEventListener('resize', handleResize);

    //clean up Eventlistener
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  return (
    <div className='navbar'>
      <div className="container">
        <div className="left-side">
          <div>
            <img src="" alt="" />
          </div>
          <span className='name'>Stavros Singoudis</span>
        </div>
        <div className="right-side">
          <nav className={isActive ? 'active' : ''}>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>

            <div
              className={`hamburger-menu ${isActive ? 'active' : ''}`}
              onClick={handleClick}>
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </div>

            <div className={isActive ? 'menu-items active' : 'menu-items'}>
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>
            </div>

          </nav>
        </div>
      </div>
    </div>
  )
}

export default Navbar;