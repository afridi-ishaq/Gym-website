import React, { createContext, useState } from 'react'

export const BookingContext = createContext()

export const BookingProvider = ({ children }) => {
  const [bookings, setBookings] = useState([])

  const addBooking = (classItem) => {
    const newBooking = {
      id: Date.now(),
      ...classItem,
      bookedAt: new Date(),
    }
    
    const isDuplicate = bookings.some(b => b.id === classItem.id)
    if (!isDuplicate) {
      setBookings([...bookings, newBooking])
      alert(`✅ Successfully booked "${classItem.name}"!`)
    } else {
      alert('⚠️ You have already booked this class!')
    }
  }

  const removeBooking = (bookingId) => {
    setBookings(bookings.filter(b => b.id !== bookingId))
  }

  const value = {
    bookings,
    addBooking,
    removeBooking,
  }

  return (
    <BookingContext.Provider value={value}>
      {children}
    </BookingContext.Provider>
  )
}

export default BookingContext
