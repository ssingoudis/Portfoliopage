//import styles
import './footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='container'>
        <div className='upper-wrapper'>
          <div className='left-wrapper'>
            <h4>Stavros Singoudis</h4>
            <p>A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product</p>
          </div>
          <hr className='mobile-hr'/>
            <div className='right-wrapper'>
              <h4>Social</h4>
              <ul>
                <li>
                  <img 
                    src="img/Twitter-logo-transparent.png" 
                    alt='Twitter-Logo'/></li>
                <li>
                  <img 
                    src="img/Linkedin-logo-round-transparent.png" 
                    alt='LinkedIn-Logo'/></li>
                <li>
                  <img 
                    src="img/Discord-logo-transparent.png" 
                    alt='Discord-Logo'/></li>
              </ul>
            </div>
        </div>

        <hr />

          <div className='lower-wrapper'>
            <p>© Copyright 2023. Made by <a href="...">Stavros Singoudis</a></p>
            </div>
      </div>
    </div>
  )
}

export default Footer;