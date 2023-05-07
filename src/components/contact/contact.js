// import styles
import './contact.css'

//import components
import BasicAlerts from '../alerts/alerts';

//import hooks
import { useRef, useState } from 'react'

//import Mail Programm
import emailjs from '@emailjs/browser';

//import hdden data
import { USER_ID, TEMPLATE_ID, PUBLIC_KEY } from '../../config'



export const Contact = () => {

  //set message information for E-Mail data
  let date = new Date()
  let day = date.getDay()
  let month = date.getMonth() + 1
  let year = date.getFullYear()
  let hours = date.getHours()
  let minutes = date.getMinutes()
  let absendeZeit = `Nachricht gesendet am ${day}.${month}.${year} um ${hours}:${minutes} Uhr.`

  const [isSuccess, setIsSuccess] = useState(null)

  const form = useRef();

  // prevent Page reload
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(`${USER_ID}`, `${TEMPLATE_ID}`, form.current, `${PUBLIC_KEY}`)
      .then((result) => {
        setIsSuccess(true);
        setTimeout(() => {
          setIsSuccess(null);
        }, 15000);

        form.current.reset()
      }
        , (error) => {
          setIsSuccess(false);
          setTimeout(() => {
            setIsSuccess(null);
          }, 15000);
        });
  }

  return (
    <div id='contact' className='contact'>

      <BasicAlerts isSuccess={isSuccess} />

      <div className='container'>
        <h1>Contact</h1>
        <hr className='heading' />
        <p>Feel free to Contact me by submitting the form below and I will get back to you as soon as possible</p>
      </div>
      <div className='form-container'>
        <div className='wrapper'>

          {/* https://dashboard.emailjs.com/admin */}
          <form
            id='form'
            ref={form}
            method='post'
            onSubmit={sendEmail}
            autoComplete='off'>
            <div className='form-row'>
              <label>Name</label>
              <input
                type='text'
                id='name'
                placeholder='Jane Doe'
                name='name'
                required />
            </div>
            <div className='form-row'>
              <label>E-Mail</label>
              <input
                type='email'
                id='email'
                placeholder='email@domain.com'
                name='email'
                required />
            </div>
            <div className='form-row'>
              <label>Message</label>
              <textarea
                className='textarea'
                type='text'
                id='message'
                placeholder='Enter your message'
                name='message'
                required />
            </div>
            <input
              style={{ display: 'none', height: '0px', width: '0px' }}
              name='date'
              value={absendeZeit}
              readOnly
            ></input>
            <div className='form-row'>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact;