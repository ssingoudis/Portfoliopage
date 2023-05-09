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
import css from '../../img/technologies/css3.png'
import html from '../../img/technologies/html5.png'
import react from '../../img/technologies/react.png'
import API from '../../img/technologies/RESTfulAPI.png'


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


export default function WeatherApp() {

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
            Weather Application
          </Typography>

          <hr className='heading' />
          <p style={p}>
            This page contains the case study of my Weather Application which includes the Project Overview,
            Tools Used and a Live Link to the official product.
            </p>
          <img
            src="https://i.ibb.co/b5kdr4N/Weather-App-Mockup.jpg"
            alt="Project Image"
            style={image} />

          <Typography id="modal-modal-description" sx={body}>
            <h1>Project description</h1>
          </Typography>

          <p style={p}>My initial React RESTful API project was this one. 
            This project aimed to become familiar with RESTful APIs.
            <br/><br/>I made an app that enables users to search for cities all over the world and display the present and upcoming weather.
            The countrycode appears aswell in addition to the city name. In order to do that, I used two different APIs. 
            The free Version of Open Weather API and GeoDB Cities from RapidAPI.
            <br/><br/>The App displays a container with the current temperature in degrees Celsius, the 
            text description of the weather, the appropriate weather icon, the windspeed in meters per second, the 
            pressure in hPa, and the humidity in percent for the current day. 
            Additionally, a one-week weather forecast is shown with identical information, plus the minimum 
            and maximum temperatures for each day.
            <br/><br/>The app is fully responsive and has been optimized for both desktop and mobile platforms.
            </p>

          <Typography sx={body} variant='technology'>
            <div>
              <h1>Technology used</h1>
              <div>
                <img className='techimg' style={img} src={html} />
                <img className='techimg' style={img} src={css} />
                <img className='techimg' style={img} src={javascript} />
                <img className='techimg' style={img} src={react} />
                <img className='techimg' style={img} src={API} />
              </div>
            </div>
          </Typography>

          <Typography className='modalBTcontainer' style={check ? buttons : buttonsResponsive}>
            <button style={button} className='modalBT' onClick={() => { window.open('https://weather.singoudis.dev/', '_blank') }}>Project Link</button>
            <button style={button} className='modalBT' onClick={handleClose}>Back to Homepage</button>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}