// import styles
import './contact.css'

import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser';
import { USER_ID, TEMPLATE_ID, PUBLIC_KEY } from '../../config'

export const Contact = () => {

  let date = new Date()
  let day = date.getDay()
  let month = date.getMonth() + 1
  let year = date.getFullYear()
  let hours = date.getHours()
  let minutes = date.getMinutes()
  let absendeZeit = `Nachricht gesendet am ${day}.${month}.${year} um ${hours}:${minutes} Uhr.`

  console.log(absendeZeit)

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(`${USER_ID}`, `${TEMPLATE_ID}`, form.current, `${PUBLIC_KEY}`)
      .then((result) => {
        console.log(result.text); //show modal and reset
      }
        , (error) => {
          console.log(error.text); //show modal with Error-message
        });
  }

  return (
    <div className='contact'>
      <div className='container'>
        <h1>Contact</h1>
        <hr className='heading' />
        <p>Feel free to Contact me by submitting the form below and I will get back to you as soon as possible</p>
      </div>
      <div className='form-container'>
        <div className='wrapper'>
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