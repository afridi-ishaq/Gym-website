import { BrowserRouter, Routes, Route } from "react-router-dom"
import { BookingProvider } from "./BookingContext"

import Home from "./pages/home/Home"
import About from "./pages/about/About"
import Features from "./pages/features/Features"
import Services from "./pages/services/Services"
import Exercise from "./pages/exercise/Exercise"
import Classes from "./pages/Classes"
import Trainers from "./pages/Trainers"
import Dashboard from "./pages/Dashboard"
import Contact from "./layouts/Contact"
import GetStarted from "./layouts/GetStarted"
import RootLayout from "./layouts/RootLayout"

export default function App() {
  return (
    <BookingProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="features" element={<Features />} />
            <Route path="services" element={<Services />} />
            <Route path="exercise" element={<Exercise />} />
            <Route path="classes" element={<Classes />} />
            <Route path="trainers" element={<Trainers />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="contact" element={<Contact />} />
            <Route path="get-started" element={<GetStarted />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </BookingProvider>
  )
}