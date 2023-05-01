// import styles
import './contact.css'

import { useState } from 'react'
import { USERNAME, PASSWORD, SERVER, PORT } from '../../config'

const Contact = () => {

  // const nodemailer = require('nodemailer');

  // const transporter = nodemailer.createTransport({
  //   host: 'smtp.example.com',
  //   port: 587,
  //   secure: false,
  //   auth: {
  //     user: 'your-email@example.com',
  //     pass: 'your-email-password'
  //   }
  // });


  const [message, setMessage] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(message, name, email)
    openPopup()
    setMessage('')
    setName('')
    setEmail('')
    console.log(USERNAME)
    // sendEmail()
  }

  const handleChangeName = (e) => {
    setName(e.target.value)
  }
  const handleChangeEmail = (e) => {
    setEmail(e.target.value)
  }
  const handleChangeMessage = (e) => {
    setMessage(e.target.value)
  }

  const openPopup = () => {
    console.log('sent!')
  }

  const resetForm = () => {
    document.getElementById('form').reset()
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
            // method='post'
            onSubmit={handleSubmit}
            autoComplete='off'>
            <div className='form-row'>
              <label>Name</label>
              <input
                type='text'
                id='name'
                value={name}
                placeholder='Jane Doe'
                onChange={handleChangeName}
                required />
            </div>
            <div className='form-row'>
              <label>E-Mail</label>
              <input
                type='email'
                id='email'
                value={email}
                placeholder='email@domain.com'
                onChange={handleChangeEmail}
                required />
            </div>
            <div className='form-row'>
              <label>Message</label>
              <textarea
                className='textarea'
                type='text'
                id='message'
                value={message}
                onChange={handleChangeMessage}
                placeholder='Enter your message'
                required />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact;