import React, { useContext } from 'react'
import { motion } from 'framer-motion'
import { FiTrash2, FiCalendar, FiClock, FiUser } from 'react-icons/fi'
import Card from '../components/Card'
import Button from '../components/Button'
import { BookingContext } from '../BookingContext'

const Dashboard = () => {
  const { bookings, removeBooking } = useContext(BookingContext)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <div className='bg-dark-900 min-h-screen pt-24 pb-16'>
      <div className='container-custom px-4'>
        <motion.div
          className='text-center mb-16'
          variants={containerVariants}
          initial='hidden'
          animate='visible'
        >
          <motion.h1 variants={itemVariants} className='text-5xl font-bold mb-4'>
            My <span className='gradient-text'>Bookings</span>
          </motion.h1>
          <motion.p variants={itemVariants} className='text-xl text-gray-400'>
            Manage your booked classes and upcoming sessions
          </motion.p>
        </motion.div>

        {/* Stats Overview */}
        <motion.div
          className='grid md:grid-cols-3 gap-6 mb-12'
          variants={containerVariants}
          initial='hidden'
          animate='visible'
        >
          <Card variant='gradient' delay={0}>
            <div className='text-center'>
              <div className='text-4xl font-bold text-neon-cyan mb-2'>{bookings.length}</div>
              <div className='text-gray-400'>Booked Classes</div>
            </div>
          </Card>
          <Card variant='gradient' delay={0.1}>
            <div className='text-center'>
              <div className='text-4xl font-bold text-neon-purple mb-2'>
                {bookings.reduce((acc, b) => acc + b.duration, 0)}
              </div>
              <div className='text-gray-400'>Total Minutes</div>
            </div>
          </Card>
          <Card variant='gradient' delay={0.2}>
            <div className='text-center'>
              <div className='text-4xl font-bold text-neon-gold mb-2'>
                {Math.max(0, Math.round(bookings.length * 4.5))}
              </div>
              <div className='text-gray-400'>Calories Burned</div>
            </div>
          </Card>
        </motion.div>

        {/* Bookings List */}
        {bookings.length > 0 ? (
          <motion.div
            className='space-y-4'
            variants={containerVariants}
            initial='hidden'
            animate='visible'
          >
            {bookings.map((booking, i) => (
              <motion.div
                key={booking.id}
                variants={itemVariants}
                whileHover={{ x: 5 }}
              >
                <Card variant='glass' className='flex items-center justify-between p-6'>
                  <div className='flex items-center gap-4 flex-1'>
                    <div className='text-4xl'>{booking.icon}</div>
                    <div className='flex-1'>
                      <h3 className='text-xl font-bold mb-2'>{booking.name}</h3>
                      <div className='space-y-1 text-sm text-gray-400'>
                        <div className='flex items-center gap-2'>
                          <FiUser size={16} /> {booking.trainer}
                        </div>
                        <div className='flex items-center gap-2'>
                          <FiClock size={16} /> {booking.duration} minutes
                        </div>
                        <div className='flex items-center gap-2'>
                          <FiCalendar size={16} /> {booking.level}
                        </div>
                      </div>
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => removeBooking(booking.id)}
                    className='p-3 text-red-400 hover:bg-red-400 hover:bg-opacity-10 rounded-lg transition-all'
                  >
                    <FiTrash2 size={24} />
                  </motion.button>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className='text-center py-16'
          >
            <div className='text-6xl mb-4'>📅</div>
            <h2 className='text-2xl font-bold mb-2'>No Bookings Yet</h2>
            <p className='text-gray-400 mb-8'>Browse our classes and book your first session!</p>
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default Dashboard
