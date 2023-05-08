//import MaterialUI Components
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

//import style
import './modal.css'

//import images
import background from '../../img/home-background.png'
import javascript from '../../img/technologies/javascript.png'
import html from '../../img/technologies/html5.png'
import react from '../../img/technologies/react.png'
import tailwind from '../../img/technologies/tailwind.png'


// styles
const styleBox = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  borderRadius: '6px',
  transform: 'translate(-50%, -50%)',
  width: window.innerWidth * .8,
  height: window.innerHeight * .85,
  backgroundImage: 'url(' + background + ')',
  opacity: 1,
  border: '2px solid #666',
  overflowY: "auto",
  boxShadow: 24,
  p: 4,
  cursor: 'default'
};

const heading = {
  mt: 2,
  color: 'black',
  display: 'flex',
  fontWeight: 700,
  justifyContent: 'center',
  textAlign: 'center'
}

const image = {
  display: 'flex',
  margin: 'auto',
  width: window.innerWidth * .7,
  maxWidth: '1280px',
  height: 'auto',
  borderRadius: '6px'
}

const p = {
  display: 'flex',
  maxWidth: '85%',
  margin: '2rem auto 3rem auto'
}

const img = {
  margin: '1rem'
}

const body = {
  color: 'black',
  textAlign: 'center',
}


export default function Portfolio() {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const buttons = {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    margin: '2rem auto 1rem auto',
    justifyContent: 'space-evenly',
  }

  const buttonsResponsive = {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    alignItems: 'stretch',
    margin: '2rem auto 1rem auto',
  }

  // check width to apply responsive design
  const widthOfWindow = window.innerWidth
  const check = widthOfWindow > 600 ? true : false;

  const button = {
    padding: '1rem 2rem',
    marginTop: '1.5rem',
  }

  return (
    <div className='modal'>

      {/* The Button that appears on the Project page, on Hover */}
      <Button onClick={handleOpen}>Show Casestudy</Button>

      {/* The Modal, with each Typography as own section */}


      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >

        <Box sx={styleBox}>
          <Typography
            id="modal-modal-title"
            sx={heading}
            variant="h3"
            component="h2">
            Portfolio
          </Typography>

          <hr className='heading' />
          <p style={p}>
            This page contains the case study of my Portfolio Project which includes the Project Overview,
            Tools Used and Live Links to the official product.
          </p>
          <img
            src="https://i.ibb.co/VNtp3c3/Tailwind-Portfolio-Mockup.jpg"
            alt="Project Image"
            style={image} />

          <Typography id="modal-modal-description" sx={body}>
            <h1>Project description</h1>
          </Typography>

          <p style={p}>The goal of this project was to strengthen my newly acquired ReactJS skills and 
          familiarize myself with the TailwindCSS Framework. In this project, both Frameworks were combined.
          <br/><br/>
          I created this Portfolio page, containing five sections of react Components styled with TailwindCSS. 
          Three of my components were created using algorithm scripting through an external data source. 
          Additionally, I integrated Google Maps and a contact form that I made with Netlify Forms.
          I could quickly understand how TailwindCSS functions and how to apply it.
          <br/><br/>It turned out that this wouldn't be my last portfolio, thus it's the reason 
          it only exists in the desktop version and was never made mobile-friendly.
          </p>

          <Typography sx={body} variant='technology'>
            <div>
              <h1>Technology used</h1>
              <div>
                <img className='techimg' style={img} src={html} />
                <img className='techimg' style={img} src={tailwind} />
                <img className='techimg' style={img} src={javascript} />
                <img className='techimg' style={img} src={react} />
              </div>
            </div>
          </Typography>

          <Typography className='modalBTcontainer' style={check ? buttons : buttonsResponsive}>
            <button style={button} className='modalBT' onClick={() => { window.open('https://tailwindcss-portfolio.singoudis.dev/', '_blank') }}>Project Link</button>
            <button style={button} className='modalBT' onClick={handleClose}>Back to Homepage</button>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}