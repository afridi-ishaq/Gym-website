import React from 'react'
import { motion } from 'framer-motion'
import { FiCheck, FiAward, FiTarget, FiTrendingUp } from 'react-icons/fi'
import Card from '../../components/Card'
import Button from '../../components/Button'

const Services = () => {
  const services = [
    { id: 1, icon: '🏋️', title: 'Strength Training', description: 'Build muscle and increase your strength with comprehensive weight training programs' },
    { id: 2, icon: '🧘', title: 'Yoga & Flexibility', description: 'Improve flexibility, balance, and mental clarity with guided yoga sessions' },
    { id: 3, icon: '❤️', title: 'Cardio Classes', description: 'High-energy cardio workouts to boost your endurance and burn calories' },
    { id: 4, icon: '🥋', title: 'Martial Arts', description: 'Learn self-defense and martial arts techniques from experienced instructors' },
    { id: 5, icon: '🤸', title: 'CrossFit', description: 'Intense functional training combining weightlifting, gymnastics, and cardio' },
    { id: 6, icon: '👥', title: 'Personal Training', description: 'One-on-one coaching tailored to your specific fitness goals and needs' }
  ]

  const pricing = [
    {
      id: 1,
      plan: 'Basic',
      price: '$29',
      duration: '/month',
      features: ['Gym Access', '24/7 Availability', 'Basic Equipment', 'Email Support'],
    },
    {
      id: 2,
      plan: 'Pro',
      price: '$59',
      duration: '/month',
      features: ['All Basic Features', '2 Personal Sessions/month', 'All Classes', 'Priority Support', 'Nutrition Tracking'],
      popular: true,
    },
    {
      id: 3,
      plan: 'Elite',
      price: '$99',
      duration: '/month',
      features: ['Unlimited Sessions', 'Dedicated Trainer', 'All Classes', 'VIP Support', 'Meal Plans', 'Performance Analysis'],
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <div className='bg-dark-900 min-h-screen'>
      {/* Services Section */}
      <section className='section-spacing pt-32 bg-gradient-to-b from-dark-900 to-dark-800'>
        <div className='container-custom px-4'>
          <motion.div
            className='text-center mb-16'
            variants={containerVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
          >
            <motion.h2 variants={itemVariants} className='text-5xl font-bold mb-4'>
              Our <span className='gradient-text'>Services</span>
            </motion.h2>
            <motion.p variants={itemVariants} className='text-xl text-gray-400'>
              Comprehensive fitness solutions tailored to your goals
            </motion.p>
          </motion.div>

          <motion.div
            className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'
            variants={containerVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
          >
            {services.map((service, i) => (
              <Card key={service.id} variant='glass' delay={i * 0.1}>
                <motion.div
                  className='text-5xl mb-4'
                  whileHover={{ scale: 1.2, rotate: 10 }}
                >
                  {service.icon}
                </motion.div>
                <h3 className='text-2xl font-bold mb-3'>{service.title}</h3>
                <p className='text-gray-400'>{service.description}</p>
              </Card>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className='section-spacing bg-dark-900'>
        <div className='container-custom px-4'>
          <motion.div
            className='grid md:grid-cols-2 gap-12 items-center'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              <h2 className='text-4xl font-bold mb-6'>
                Why Choose <span className='gradient-text'>GymSite</span>?
              </h2>
              <div className='space-y-4'>
                {[
                  { icon: FiAward, title: 'Expert Trainers', desc: 'Certified professionals with years of experience' },
                  { icon: FiTarget, title: 'Personalized Plans', desc: 'Custom fitness routines tailored to your goals' },
                  { icon: FiTrendingUp, title: 'Proven Results', desc: '95% of our members achieve their fitness goals' },
                ].map((item, i) => {
                  const Icon = item.icon
                  return (
                    <motion.div
                      key={i}
                      className='flex gap-4'
                      initial={{ x: -50, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ delay: i * 0.2 }}
                      viewport={{ once: true }}
                    >
                      <div className='text-neon-cyan text-2xl'>
                        <Icon size={24} />
                      </div>
                      <div>
                        <h4 className='font-bold text-lg mb-1'>{item.title}</h4>
                        <p className='text-gray-400'>{item.desc}</p>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>
            <motion.div
              className='grid grid-cols-2 gap-4'
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {[
                { stat: '10K+', label: 'Happy Members' },
                { stat: '500+', label: 'Classes/Month' },
                { stat: '95%', label: 'Success Rate' },
                { stat: '50+', label: 'Expert Trainers' },
              ].map((item, i) => (
                <Card key={i} variant='gradient' className='text-center'>
                  <div className='text-3xl font-bold text-neon-cyan mb-2'>{item.stat}</div>
                  <div className='text-sm text-gray-400'>{item.label}</div>
                </Card>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className='section-spacing bg-gradient-to-b from-dark-900 to-dark-800'>
        <div className='container-custom px-4'>
          <motion.div
            className='text-center mb-16'
            variants={containerVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
          >
            <motion.h2 variants={itemVariants} className='text-5xl font-bold mb-4'>
              Membership <span className='gradient-text'>Plans</span>
            </motion.h2>
            <motion.p variants={itemVariants} className='text-xl text-gray-400'>
              Choose the perfect plan for your fitness journey
            </motion.p>
          </motion.div>

          <motion.div
            className='grid md:grid-cols-3 gap-6'
            variants={containerVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
          >
            {pricing.map((plan, i) => (
              <Card
                key={plan.id}
                variant={plan.popular ? 'gradient' : 'default'}
                delay={i * 0.1}
                className={`relative ${plan.popular ? 'border-neon-cyan scale-105 md:scale-100 lg:scale-105' : ''}`}
              >
                {plan.popular && (
                  <div className='absolute -top-4 left-1/2 transform -translate-x-1/2 bg-neon-cyan text-dark-900 px-4 py-1 rounded-full text-sm font-bold'>
                    MOST POPULAR
                  </div>
                )}
                <h3 className='text-2xl font-bold mb-2'>{plan.plan}</h3>
                <div className='mb-6'>
                  <span className='text-4xl font-bold text-neon-cyan'>{plan.price}</span>
                  <span className='text-gray-400 ml-2'>{plan.duration}</span>
                </div>
                <ul className='space-y-3 mb-8'>
                  {plan.features.map((feature, j) => (
                    <li key={j} className='flex items-center gap-2 text-gray-300'>
                      <FiCheck className='text-neon-cyan' size={18} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant={plan.popular ? 'primary' : 'secondary'} className='w-full'>
                  Get Started
                </Button>
              </Card>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Services
