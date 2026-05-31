import React, { useState } from 'react'
import './getstarted.css'

const GetStarted = () => {
  const [selectedPlan, setSelectedPlan] = useState(null)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    plan: ''
  })

  const plans = [
    { id: 'basic', name: 'Basic', price: '$29', features: ['Gym Access', '24/7 Availability', 'Basic Equipment'] },
    { id: 'pro', name: 'Pro', price: '$59', features: ['All Basic', '2 Personal Sessions', 'All Classes', 'Priority Support'] },
    { id: 'elite', name: 'Elite', price: '$99', features: ['Unlimited Sessions', 'Dedicated Trainer', 'All Classes', 'VIP Support'] }
  ]

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handlePlanSelect = (planId) => {
    setSelectedPlan(planId)
    setFormData(prev => ({
      ...prev,
      plan: planId
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!selectedPlan) {
      alert('Please select a membership plan')
      return
    }
    console.log('Registration:', formData)
    alert('Welcome to GymSite! Your membership application has been received.')
    setFormData({ firstName: '', lastName: '', email: '', phone: '', plan: '' })
    setSelectedPlan(null)
  }

  return (
    <div className='getstarted-page'>
      <section className='getstarted-hero'>
        <h1>Start Your Fitness Journey Today</h1>
        <p>Join thousands of members transforming their lives</p>
      </section>

      <div className='getstarted-container'>
        <div className='plans-section'>
          <h2>Choose Your Plan</h2>
          <div className='plans-grid'>
            {plans.map(plan => (
              <div 
                key={plan.id}
                className={`plan-card ${selectedPlan === plan.id ? 'selected' : ''}`}
                onClick={() => handlePlanSelect(plan.id)}
              >
                <h3>{plan.name}</h3>
                <div className='plan-price'>{plan.price}<span>/month</span></div>
                <ul className='plan-features'>
                  {plan.features.map((feature, idx) => (
                    <li key={idx}>✓ {feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <form className='registration-form' onSubmit={handleSubmit}>
          <h2>Create Your Account</h2>
          
          <div className='form-row'>
            <div className='form-group'>
              <label htmlFor='firstName'>First Name</label>
              <input
                type='text'
                id='firstName'
                name='firstName'
                value={formData.firstName}
                onChange={handleChange}
                required
                placeholder='John'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='lastName'>Last Name</label>
              <input
                type='text'
                id='lastName'
                name='lastName'
                value={formData.lastName}
                onChange={handleChange}
                required
                placeholder='Doe'
              />
            </div>
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

          <div className='selected-plan-display'>
            {selectedPlan ? (
              <p>Selected Plan: <strong>{plans.find(p => p.id === selectedPlan)?.name}</strong></p>
            ) : (
              <p style={{ color: '#ff4444' }}>Please select a membership plan above</p>
            )}
          </div>

          <button type='submit' className='btn btn-primary btn-large'>Complete Registration</button>
        </form>
      </div>
    </div>
  )
}

export default GetStarted
