import React from 'react'
import './about.css'

const About = () => {
  const teamMembers = [
    { name: 'John Smith', role: 'Head Coach', emoji: '💪' },
    { name: 'Sarah Johnson', role: 'Yoga Instructor', emoji: '🧘' },
    { name: 'Mike Chen', role: 'Nutritionist', emoji: '🥗' },
    { name: 'Emma Davis', role: 'Fitness Trainer', emoji: '🏃' }
  ]

  return (
    <div className='about-page'>
      {/* About Hero */}
      <section className='about-hero'>
        <h1>About GymSite</h1>
        <p>Your fitness journey starts here</p>
      </section>

      {/* Our Story */}
      <section className='story-section'>
        <div className='story-content'>
          <h2>Our Story</h2>
          <p>Founded in 2015, GymSite has been dedicated to helping thousands of people achieve their fitness goals. We believe that fitness is not just about physical strength, but also about mental wellness and building a supportive community.</p>
          <p>Our state-of-the-art facilities and expert trainers are committed to providing you with the best fitness experience possible.</p>
        </div>
      </section>

      {/* Values */}
      <section className='values-section'>
        <h2>Our Core Values</h2>
        <div className='values-grid'>
          <div className='value-card'>
            <div className='value-icon'>🎯</div>
            <h3>Excellence</h3>
            <p>We strive for the highest standards in fitness training and facilities</p>
          </div>
          <div className='value-card'>
            <div className='value-icon'>🤝</div>
            <h3>Community</h3>
            <p>We believe in building a supportive fitness community together</p>
          </div>
          <div className='value-card'>
            <div className='value-icon'>❤️</div>
            <h3>Passion</h3>
            <p>We are passionate about helping you achieve your fitness dreams</p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className='team-section'>
        <h2>Meet Our Team</h2>
        <div className='team-grid'>
          {teamMembers.map((member, idx) => (
            <div key={idx} className='team-card'>
              <div className='team-emoji'>{member.emoji}</div>
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default About
