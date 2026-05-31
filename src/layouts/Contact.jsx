import React, { useState } from 'react'
import './contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  return (
    <div className='contact-page'>
      <div className='contact-container'>
        <div className='contact-header'>
          <h1>Get in Touch</h1>
          <p>Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
        </div>

        <div className='contact-content'>
          {/* Contact Info */}
          <div className='contact-info'>
            <div className='info-item'>
              <div className='info-icon'>📍</div>
              <h3>Location</h3>
              <p>123 Fitness Street<br/>New York, NY 10001</p>
            </div>
            <div className='info-item'>
              <div className='info-icon'>📞</div>
              <h3>Phone</h3>
              <p>+1 (555) 123-4567</p>
            </div>
            <div className='info-item'>
              <div className='info-icon'>✉️</div>
              <h3>Email</h3>
              <p>hello@gymsite.com</p>
            </div>
            <div className='info-item'>
              <div className='info-icon'>⏰</div>
              <h3>Hours</h3>
              <p>Mon - Fri: 6AM - 10PM<br/>Sat - Sun: 8AM - 8PM</p>
            </div>
          </div>

          {/* Contact Form */}
          <form className='contact-form' onSubmit={handleSubmit}>
            <div className='form-group'>
              <label htmlFor='name'>Full Name</label>
              <input
                type='text'
                id='name'
                name='name'
                value={formData.name}
                onChange={handleChange}
                required
                placeholder='John Doe'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='email'>Email Address</label>
              <input
                type='email'
                id='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                required
                placeholder='john@example.com'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='phone'>Phone Number</label>
              <input
                type='tel'
                id='phone'
                name='phone'
                value={formData.phone}
                onChange={handleChange}
                placeholder='+1 (555) 123-4567'
              />
            </div>
            <div className='form-group full-width'>
              <label htmlFor='message'>Message</label>
              <textarea
                id='message'
                name='message'
                value={formData.message}
                onChange={handleChange}
                required
                rows='5'
                placeholder='Tell us about your fitness goals...'
              ></textarea>
            </div>
            <button type='submit' className='btn btn-primary btn-large'>Send Message</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
