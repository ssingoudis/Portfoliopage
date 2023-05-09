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
import wordpress from '../../img/technologies/wordpress.png'
import elementor from '../../img/technologies/elementor.png'
import css from '../../img/technologies/css3.png'


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


export default function Restaurant() {

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
            Taverna Mythos
          </Typography>

          <hr className='heading' />
          <p style={p}>
            This page contains the case study of the Taverna Mythos Project which includes the Project Overview,
            Tools Used and a Live Link to the official product.
          </p>
          <img
            src="https://i.ibb.co/hHFK2hF/Taverna-Mythos-Mockup.jpg"
            alt="Project Image"
            style={image} />

          <Typography id="modal-modal-description" sx={body}>
              <h1>Project description</h1>
          </Typography>

              <p style={p}>
                This is the first project I've created for a client. <br/><br/>
                The requirements were pretty straightforward; I needed to develop a one page application 
                that includes information on the menu, opening times, a visual representation of some 
                dishes, the restaurant's address, and driving instructions. <br/><br/>
                Since I was a novice at web building, I utilized WordPress as my main tool and Elementor to create the layout.
                I finished and submitted the project in a week. The Website is completely responsive.
              </p>


          <Typography sx={body} variant='technology'>
            <div>
              <h1>Technology used</h1>
              <div>
                <img className='techimg' style={img} src={wordpress} />
                <img className='techimg' style={img} src={elementor} />
                <img className='techimg' style={img} src={css} />
              </div>
            </div>
          </Typography>

          <Typography className='modalBTcontainer' style={check ? buttons : buttonsResponsive}>
            <button style={button} className='modalBT' onClick={() => {window.open('https://taverna-mythos-emmendingen.com', '_blank')}}>Project Link</button>
            <button style={button} className='modalBT' onClick={handleClose}>Back to Homepage</button>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}