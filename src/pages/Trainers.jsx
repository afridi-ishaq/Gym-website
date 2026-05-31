import React from 'react'
import { motion } from 'framer-motion'
import { FiStar, FiAward, FiUsers } from 'react-icons/fi'
import Card from '../components/Card'

const TrainerCard = ({ trainer, delay }) => {
  return (
    <Card variant='gradient' delay={delay} className='text-center overflow-hidden'>
      <motion.div
        className='w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-r from-neon-cyan to-neon-purple flex items-center justify-center text-4xl'
        whileHover={{ scale: 1.1, rotate: 5 }}
      >
        {trainer.icon}
      </motion.div>
      
      <h3 className='text-2xl font-bold mb-1'>{trainer.name}</h3>
      <p className='text-neon-cyan font-semibold mb-3'>{trainer.specialty}</p>
      <p className='text-gray-400 text-sm mb-4'>{trainer.bio}</p>
      
      <div className='space-y-2 mb-4'>
        <div className='flex items-center justify-center gap-2 text-sm text-gray-300'>
          <FiAward size={16} className='text-neon-gold' /> {trainer.certifications}
        </div>
        <div className='flex items-center justify-center gap-2 text-sm text-gray-300'>
          <FiStar size={16} className='text-yellow-400' /> {trainer.rating}/5 ({trainer.reviews} reviews)
        </div>
        <div className='flex items-center justify-center gap-2 text-sm text-gray-300'>
          <FiUsers size={16} className='text-neon-cyan' /> {trainer.clients} active clients
        </div>
      </div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className='w-full px-4 py-2 bg-gradient-to-r from-neon-cyan to-neon-purple text-white font-semibold rounded-lg hover:shadow-neon-cyan transition-all'
      >
        Book Session
      </motion.button>
    </Card>
  )
}

const Trainers = () => {
  const trainers = [
    {
      id: 1,
      name: 'Sarah Johnson',
      specialty: 'Yoga & Flexibility',
      bio: 'Certified yoga instructor with 8 years of experience',
      icon: '🧘',
      certifications: 'RYT 500, Wellness Coach',
      rating: 4.9,
      reviews: 156,
      clients: 32,
    },
    {
      id: 2,
      name: 'Mike Thompson',
      specialty: 'HIIT & Cardio',
      bio: 'Former athlete specializing in high-intensity training',
      icon: '⚡',
      certifications: 'NASM-CPT, Cardio Specialist',
      rating: 4.8,
      reviews: 198,
      clients: 45,
    },
    {
      id: 3,
      name: 'Alex Chen',
      specialty: 'Strength Training',
      bio: 'Powerlifting champion with personalized coaching',
      icon: '💪',
      certifications: 'ISSF, NASM-CES',
      rating: 4.95,
      reviews: 142,
      clients: 28,
    },
    {
      id: 4,
      name: 'Emma Davis',
      specialty: 'Spin & Cycling',
      bio: 'Energetic instructor creating thrilling cycling experiences',
      icon: '🚴',
      certifications: 'Spinning Certified, Group Fitness',
      rating: 4.7,
      reviews: 165,
      clients: 50,
    },
    {
      id: 5,
      name: 'Jason Lee',
      specialty: 'Core & Pilates',
      bio: 'Expert in functional movement and core strength',
      icon: '⭐',
      certifications: 'Pilates Instructor, Movement Specialist',
      rating: 4.85,
      reviews: 120,
      clients: 35,
    },
    {
      id: 6,
      name: 'Lisa Wang',
      specialty: 'Flexibility & Recovery',
      bio: 'Specializes in flexibility training and injury prevention',
      icon: '🤸',
      certifications: 'Yoga Therapist, Sports Medicine',
      rating: 4.9,
      reviews: 178,
      clients: 40,
    },
  ]

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
            Meet Our <span className='gradient-text'>Expert Trainers</span>
          </motion.h1>
          <motion.p variants={itemVariants} className='text-xl text-gray-400'>
            Certified professionals dedicated to your fitness success
          </motion.p>
        </motion.div>

        <motion.div
          className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'
          variants={containerVariants}
          initial='hidden'
          animate='visible'
        >
          {trainers.map((trainer, i) => (
            <TrainerCard key={trainer.id} trainer={trainer} delay={i * 0.1} />
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default Trainers
