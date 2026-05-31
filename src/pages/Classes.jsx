import React, { useState, useContext } from 'react'
import { motion } from 'framer-motion'
import { FiFilter, FiUser, FiUsers, FiClock } from 'react-icons/fi'
import Button from '../components/Button'
import Card from '../components/Card'
import { BookingContext } from '../BookingContext'

const ClassCard = ({ classItem, onBook }) => {
  const isFull = classItem.enrolled >= classItem.capacity
  
  return (
    <Card variant='glass' hover={!isFull} className='overflow-hidden group'>
      <div className='relative mb-4'>
        <div className='h-32 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-lg flex items-center justify-center text-5xl'>
          {classItem.icon}
        </div>
        <div className='absolute top-2 right-2'>
          <span className={`px-3 py-1 rounded-full text-xs font-bold ${
            classItem.level === 'Beginner' ? 'bg-green-500 bg-opacity-20 text-green-400' :
            classItem.level === 'Intermediate' ? 'bg-yellow-500 bg-opacity-20 text-yellow-400' :
            'bg-red-500 bg-opacity-20 text-red-400'
          }`}>
            {classItem.level}
          </span>
        </div>
      </div>

      <h3 className='text-xl font-bold mb-2'>{classItem.name}</h3>
      
      <div className='space-y-2 text-sm text-gray-400 mb-4'>
        <div className='flex items-center gap-2'>
          <FiUser size={16} /> <span>{classItem.trainer}</span>
        </div>
        <div className='flex items-center gap-2'>
          <FiClock size={16} /> <span>{classItem.duration} min</span>
        </div>
        <div className='flex items-center gap-2'>
          <FiUsers size={16} /> <span>{classItem.enrolled}/{classItem.capacity} Spots</span>
        </div>
      </div>

      <div className='mb-4'>
        <div className='w-full bg-dark-700 rounded-full h-2'>
          <div
            className='bg-gradient-to-r from-neon-cyan to-neon-purple h-2 rounded-full transition-all duration-300'
            style={{ width: `${(classItem.enrolled / classItem.capacity) * 100}%` }}
          ></div>
        </div>
      </div>

      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
        <Button
          variant={isFull ? 'tertiary' : 'primary'}
          size='sm'
          className='w-full'
          onClick={() => !isFull && onBook(classItem)}
          disabled={isFull}
        >
          {isFull ? 'Class Full' : 'Book Now'}
        </Button>
      </motion.div>
    </Card>
  )
}

const Classes = () => {
  const { bookings, addBooking } = useContext(BookingContext)
  const [selectedType, setSelectedType] = useState('All')
  const [selectedLevel, setSelectedLevel] = useState('All')

  const mockClasses = [
    { id: 1, name: 'Power Yoga', type: 'Yoga', level: 'Beginner', trainer: 'Sarah Johnson', time: '06:00 AM', duration: 60, enrolled: 18, capacity: 20, icon: '🧘' },
    { id: 2, name: 'HIIT Training', type: 'Cardio', level: 'Intermediate', trainer: 'Mike Thompson', time: '07:00 AM', duration: 45, enrolled: 25, capacity: 25, icon: '⚡' },
    { id: 3, name: 'Strength Building', type: 'Strength', level: 'Advanced', trainer: 'Alex Chen', time: '08:00 AM', duration: 60, enrolled: 15, capacity: 20, icon: '💪' },
    { id: 4, name: 'Spin & Burn', type: 'Cardio', level: 'Intermediate', trainer: 'Emma Davis', time: '09:00 AM', duration: 45, enrolled: 22, capacity: 25, icon: '🚴' },
    { id: 5, name: 'Core Conditioning', type: 'Core', level: 'Beginner', trainer: 'Jason Lee', time: '05:00 PM', duration: 30, enrolled: 12, capacity: 15, icon: '⭐' },
    { id: 6, name: 'Boxing Fitness', type: 'Cardio', level: 'Intermediate', trainer: 'Chris Brown', time: '06:00 PM', duration: 50, enrolled: 20, capacity: 20, icon: '🥊' },
    { id: 7, name: 'Pilates & Flex', type: 'Flexibility', level: 'Beginner', trainer: 'Lisa Wang', time: '07:00 PM', duration: 55, enrolled: 16, capacity: 20, icon: '🤸' },
    { id: 8, name: 'CrossFit Masters', type: 'Strength', level: 'Advanced', trainer: 'Marcus Johnson', time: '08:00 PM', duration: 60, enrolled: 18, capacity: 20, icon: '🏋️' },
  ]

  const types = ['All', 'Cardio', 'Strength', 'Yoga', 'Core', 'Flexibility']
  const levels = ['All', 'Beginner', 'Intermediate', 'Advanced']

  const filteredClasses = mockClasses.filter(cls => {
    return (selectedType === 'All' || cls.type === selectedType) &&
           (selectedLevel === 'All' || cls.level === selectedLevel)
  })

  const handleBook = (classItem) => {
    addBooking(classItem)
  }

  return (
    <div className='bg-dark-900 min-h-screen pt-24 pb-16'>
      <div className='container-custom px-4'>
        <motion.div
          className='text-center mb-16'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className='text-5xl font-bold mb-4'>
            Choose Your <span className='gradient-text'>Perfect Class</span>
          </h1>
          <p className='text-xl text-gray-400'>
            Browse our diverse selection of fitness classes and book your spot today
          </p>
        </motion.div>

        <motion.div
          className='bg-dark-800 rounded-xl p-6 mb-12 border border-dark-700'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <div className='flex items-center gap-2 mb-6 text-neon-cyan'>
            <FiFilter size={20} />
            <h3 className='text-lg font-bold'>Filter Classes</h3>
          </div>

          <div className='grid md:grid-cols-2 gap-6'>
            <div>
              <label className='block text-sm font-semibold mb-3'>Class Type</label>
              <div className='space-y-2'>
                {types.map(type => (
                  <button
                    key={type}
                    onClick={() => setSelectedType(type)}
                    className={`block w-full text-left px-4 py-2 rounded-lg transition-all ${
                      selectedType === type
                        ? 'bg-neon-cyan text-dark-900 font-semibold'
                        : 'bg-dark-700 hover:bg-dark-600 text-gray-300'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className='block text-sm font-semibold mb-3'>Difficulty Level</label>
              <div className='space-y-2'>
                {levels.map(level => (
                  <button
                    key={level}
                    onClick={() => setSelectedLevel(level)}
                    className={`block w-full text-left px-4 py-2 rounded-lg transition-all ${
                      selectedLevel === level
                        ? 'bg-neon-cyan text-dark-900 font-semibold'
                        : 'bg-dark-700 hover:bg-dark-600 text-gray-300'
                    }`}
                  >
                    {level}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1 }}
        >
          {filteredClasses.map((classItem, i) => (
            <motion.div
              key={classItem.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              <ClassCard classItem={classItem} onBook={handleBook} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default Classes
