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
import woocommerce from '../../img/technologies/woocommerce.png'
import elementor from '../../img/technologies/elementor.png'
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


export default function Hotel() {

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
            Tranquil Eco Lodge
          </Typography>

          <hr className='heading' />
          <p style={p}>
            This page contains the case study of the Tranquil Eco Lodge Project which includes the Project Overview,
            Tools Used and a Live Link to the official product.
          </p>
          <img
            src="https://i.ibb.co/n0CQ9fH/Tranquil-Eco-Lodge-Mockup-Better.jpg"
            alt="Project Image"
            style={image} />

          <Typography id="modal-modal-description" sx={body}>
            <h1>Project description</h1>
          </Typography>
          <p style={p}>I worked on this project, in exchange for four weeks of living on a private island in Bocas del Torro, Panama. 
            <br /><br />The requirements were for me to build a WordPress website layout,
            connect the Stripe API and a booking system to it, and provide it with
            highly detailed documentation so the customer could edit and add new material on her own.
            <br/><br/>I just started designing the layout immediately because the criteria were so 
            clearly stated, and after doing some research, I decided to use WooCommerce as the booking system. 
            I connected the Stripe API into the WooCommerce booking system, provided clear documentation, 
            spent time training the client. I used GoDaddy to host the website.
            The Website is completely responsive.
            <br/><br/>
            Unfortunately, the client didn't finish adding her content yet and damaged it during 
            the process. Even Nevertheless, I feel the need to present it because the majority of the 
            excellent work can still be seen.
          </p>

          <Typography sx={body} variant='technology'>
            <div>
              <h1>Technology used</h1>
              <div>
                <img className='techimg' style={img} src={wordpress} />
                <img className='techimg' style={img} src={elementor} />
                <img className='techimg' style={img} src={woocommerce} />
                <img className='techimg' style={img} src={API} />
              </div>
            </div>
          </Typography>

          <Typography className='modalBTcontainer' style={check ? buttons : buttonsResponsive}>
            <button style={button} className='modalBT' onClick={() => { window.open('https://tranquilecolodge.com/', '_blank') }}>Project Link</button>
            <button style={button} className='modalBT' onClick={handleClose}>Back to Homepage</button>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}