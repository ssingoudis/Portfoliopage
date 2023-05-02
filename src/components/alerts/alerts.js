//import styles
import './alerts.css'

//import MUI
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';
import { useState } from 'react';


const BasicAlerts = ({ isSuccess }) => {

  const [open, setOpen] = useState(true)

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Stack spacing={2}>

      {isSuccess === true &&
        open &&
          <Alert
            severity="success"
            className='alert'
            onClose={handleClose}>
            <AlertTitle
              className='alert-title'>Your message has been sent successfully!</AlertTitle>
          </Alert>}

      {isSuccess === false &&
        open &&
          <Alert
            severity="error"
            className='alert-title'
            onClose={() => { }}>
            <AlertTitle>ERROR - Message couldn't be sent!</AlertTitle
            ></Alert>}
    </Stack>
  );
}

export default BasicAlerts;

