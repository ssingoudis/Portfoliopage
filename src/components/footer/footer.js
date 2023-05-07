//import styles
import './footer.css'

//import socials
import Twitter from '../../img/socials/Twitter-logo-transparent.png'
import LinkedIn from '../../img/socials/Linkedin-logo-round-transparent.png'
import Discord from '../../img/socials/Discord-logo-transparent.png'


const Footer = ({ removeHashFromUrl }) => {

  const handleClickHome = () => {
    const section = document.getElementById('home');
    section.scrollIntoView();
    removeHashFromUrl();
  };

  return (
    <div className='footer'>
      <div className='container'>
        <div className='upper-wrapper'>
          <div className='left-wrapper'>
            <h4>Stavros Singoudis</h4>
            <p className='description'>A Software Enthusiast, UI Designer & passionate Front-End focused Web Developer.</p>
          </div>
          <hr className='mobile-hr'/>
            <div className='right-wrapper'>
              <h4>Social</h4>
              <ul>
                <li>
                  <img 
                    src={Twitter} 
                    alt='Twitter-Logo'/></li>
                <li>
                  <img 
                    src={LinkedIn}
                    alt='LinkedIn-Logo'/></li>
                <li>
                  <img 
                    src={Discord} 
                    alt='Discord-Logo'/></li>
              </ul>
            </div>
        </div>

        <hr />

          <div className='lower-wrapper'>
            <p>© Copyright 2023. Made by <button className='navigationBT' onClick={handleClickHome}><b>Stavros Singoudis</b></button></p>
            </div>
      </div>
    </div>
  )
}

export default Footer;