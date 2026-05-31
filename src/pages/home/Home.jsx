import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiArrowRight, FiCheckCircle } from 'react-icons/fi'
import Button from '../../components/Button'
import Card from '../../components/Card'

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }

  const features = [
    { icon: '💪', title: 'Modern Equipment', desc: 'State-of-the-art fitness equipment and facilities' },
    { icon: '👨‍🏫', title: 'Expert Trainers', desc: 'Certified professionals to guide your journey' },
    { icon: '🏆', title: 'Proven Results', desc: 'Thousands of success stories from our members' },
    { icon: '⏰', title: '24/7 Access', desc: 'Work out whenever it fits your schedule' },
  ]

  const stats = [
    { number: '10K+', label: 'Active Members' },
    { number: '500+', label: 'Classes Monthly' },
    { number: '50+', label: 'Expert Trainers' },
    { number: '95%', label: 'Success Rate' },
  ]

  return (
    <div className='bg-dark-900'>
      {/* Hero Section */}
      <section className='relative min-h-screen flex items-center justify-center overflow-hidden pt-20'>
        {/* Animated background */}
        <div className='absolute inset-0 opacity-30'>
          <div className='absolute top-20 left-10 w-72 h-72 bg-neon-cyan rounded-full mix-blend-multiply filter blur-3xl animate-pulse'></div>
          <div className='absolute top-40 right-20 w-72 h-72 bg-neon-purple rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-2000'></div>
          <div className='absolute bottom-20 left-1/2 w-72 h-72 bg-neon-pink rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-4000'></div>
        </div>

        {/* Hero Content */}
        <motion.div
          className='relative z-10 container-custom px-4 text-center'
          variants={containerVariants}
          initial='hidden'
          animate='visible'
        >
          <motion.div variants={itemVariants}>
            <span className='inline-block px-4 py-2 bg-neon-cyan bg-opacity-10 border border-neon-cyan rounded-full text-neon-cyan text-sm font-semibold mb-6'>
              ✨ Welcome to the Future of Fitness
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className='text-6xl md:text-7xl font-black mb-6 leading-tight'
          >
            <span className='text-white'>Transform Your</span>
            <br />
            <span className='gradient-text'>Body & Mind</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className='text-xl md:text-2xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed'
          >
            Join thousands of members who have achieved their fitness goals. Get personalized training, flexible scheduling, and results that matter.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className='flex flex-col sm:flex-row gap-4 justify-center mb-12'
          >
            <Link to="/get-started">
              <Button variant="primary" size="lg" className='flex items-center gap-2'>
                Start Free Trial
                <FiArrowRight />
              </Button>
            </Link>
            <Link to="/classes">
              <Button variant="secondary" size="lg">
                View Classes
              </Button>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className='grid grid-cols-2 md:grid-cols-4 gap-4 mt-16'
          >
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className='p-4 bg-dark-800 rounded-lg border border-dark-700 hover:border-neon-cyan'
              >
                <div className='text-2xl md:text-3xl font-bold text-neon-cyan'>{stat.number}</div>
                <div className='text-sm text-gray-400'>{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className='section-spacing bg-gradient-to-b from-dark-900 to-dark-800'>
        <div className='container-custom px-4'>
          <motion.div
            variants={containerVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            className='text-center mb-16'
          >
            <motion.h2 variants={itemVariants} className='text-4xl font-bold mb-4'>
              Why Choose <span className='gradient-text'>GymSite</span>?
            </motion.h2>
            <motion.p variants={itemVariants} className='text-gray-400 text-lg'>
              Everything you need for your fitness transformation
            </motion.p>
          </motion.div>

          <motion.div
            className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'
            variants={containerVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
          >
            {features.map((feature, i) => (
              <Card
                key={i}
                variant='glass'
                delay={i * 0.1}
                className='text-center hover:shadow-neon-cyan'
              >
                <motion.div
                  className='text-5xl mb-4'
                  whileHover={{ scale: 1.2, rotate: 10 }}
                >
                  {feature.icon}
                </motion.div>
                <h3 className='text-xl font-bold mb-3'>{feature.title}</h3>
                <p className='text-gray-400'>{feature.desc}</p>
              </Card>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Membership Tiers Preview */}
      <section className='section-spacing bg-dark-900'>
        <div className='container-custom px-4'>
          <motion.div
            variants={containerVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            className='text-center mb-16'
          >
            <motion.h2 variants={itemVariants} className='text-4xl font-bold mb-4'>
              Flexible <span className='gradient-text'>Membership Plans</span>
            </motion.h2>
            <motion.p variants={itemVariants} className='text-gray-400 text-lg'>
              Choose the plan that fits your lifestyle
            </motion.p>
          </motion.div>

          <motion.div
            className='grid md:grid-cols-3 gap-6'
            variants={containerVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
          >
            {[
              { name: 'Basic', price: '$29', features: ['24/7 Gym Access', 'Basic Equipment', 'Community Chat'] },
              { name: 'Premium', price: '$59', features: ['All Basic +', 'Personal Trainer (1x/week)', 'Nutrition Plan', 'Priority Support'], highlight: true },
              { name: 'Elite', price: '$99', features: ['All Premium +', 'Unlimited Coaching', 'Recovery Programs', 'VIP Lounge Access'] },
            ].map((plan, i) => (
              <Card
                key={i}
                variant={plan.highlight ? 'gradient' : 'default'}
                delay={i * 0.1}
                className={`relative ${plan.highlight ? 'border-neon-cyan scale-105' : ''}`}
              >
                {plan.highlight && (
                  <div className='absolute -top-3 left-1/2 transform -translate-x-1/2 bg-neon-cyan text-dark-900 px-4 py-1 rounded-full text-xs font-bold'>
                    POPULAR
                  </div>
                )}
                <h3 className='text-2xl font-bold mb-2'>{plan.name}</h3>
                <div className='text-4xl font-bold text-neon-cyan mb-4'>{plan.price}<span className='text-sm text-gray-400'>/month</span></div>
                <ul className='space-y-3 mb-6'>
                  {plan.features.map((feature, j) => (
                    <li key={j} className='flex items-center gap-2 text-gray-300'>
                      <FiCheckCircle className='text-neon-cyan' />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant={plan.highlight ? 'primary' : 'secondary'} className='w-full'>
                  Choose Plan
                </Button>
              </Card>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='section-spacing bg-gradient-to-r from-dark-800 to-dark-900 relative overflow-hidden'>
        <div className='absolute inset-0 opacity-20'>
          <div className='absolute top-10 right-10 w-40 h-40 bg-neon-cyan rounded-full mix-blend-multiply filter blur-3xl'></div>
        </div>
        <motion.div
          className='container-custom px-4 text-center relative z-10'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className='text-4xl md:text-5xl font-bold mb-6'>
            Ready to Transform <span className='gradient-text'>Your Life</span>?
          </h2>
          <p className='text-xl text-gray-400 mb-8 max-w-2xl mx-auto'>
            Begin your fitness journey today. No commitment, cancel anytime.
          </p>
          <Link to="/get-started">
            <Button variant="primary" size="lg" className='flex items-center gap-2 mx-auto'>
              Start Your Free Trial Now
              <FiArrowRight />
            </Button>
          </Link>
        </motion.div>
      </section>
    </div>
  )
}

export default Home
