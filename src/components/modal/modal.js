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
// import javascript from '../../img/technologies/javascript.png'
// import css from '../../img/technologies/css3.png'
// import html from '../../img/technologies/html5.png'
// import react from '../../img/technologies/react.png'
// import tailwind from '../../img/technologies/tailwind.png'
// import wordpress from '../../img/technologies/wordpress.png'
// import woocommerce from '../../img/technologies/woocommerce.png'
// import elementor from '../../img/technologies/elementor.png'


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
  height: 'auto',
  borderRadius: '6px'
}

const p = {
  display: 'flex',
  textAlign: 'center',
  maxWidth: '85%',
  margin: '2rem auto'
}

// const img = {
//   margin: '1rem'
// }

const body = {
  color: 'black',
  textAlign: 'center'
}



export default function BasicModal() {

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
            Project.Name
          </Typography>

          <hr className='heading' />
          <p style={p}>
            This page contains the case study of Dopefolio Open-Source Project which includes the Project Overview,
            Tools Used and Live Links to the official product.
          </p>
          <img
            src="https://i.ibb.co/b5kdr4N/Weather-App-Mockup.jpg"
            alt="Project-img"
            style={image} />

          <Typography id="modal-modal-description" sx={body}>
            <div>
              <h1>Project description</h1>
              <p style={p}>here comes the description, ive used
                API from piyabay, created...
                optimised it for mobile....
              </p>
            </div>
          </Typography>

          <Typography sx={body} variant='technology'>
            <div>
              <h1>Technology used</h1>
              <div>
                {/* <img className='techimg' style={img} src={javascript} alt='javascript-logo'/>
                <img className='techimg' style={img} src={css} alt='css-logo'/>
                <img className='techimg' style={img} src={html} alt='html-logo'/>
                <img style={img} src={react} />
                <img style={img} src={tailwind} />
                <img style={img} src={elementor} />
                <img style={img} src={wordpress} />
                <img style={img} src={woocommerce} /> */}
              </div>
            </div>
          </Typography>

          <Typography className='modalBTcontainer' style={check ? buttons : buttonsResponsive}>
            <button style={button} className='modalBT'>Project Link</button>
            <button style={button} className='modalBT'>Back to Homepage</button>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}