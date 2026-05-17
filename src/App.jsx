import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/home/Home"
import About from "./pages/about/About"
import Features from "./pages/features/Features"
import Services from "./pages/services/Services"
import Exercise from "./pages/exercise/Exercise"
import Contact from "./layouts/Contact"
import GetStarted from "./layouts/GetStarted"
import RootLayout from "./layouts/RootLayout"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Layout route */}
        <Route path="/" element={<RootLayout />}>
          
          {/* Pages */}
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="features" element={<Features />} />
          <Route path="services" element={<Services />} />
          <Route path="exercise" element={<Exercise />} />
          <Route path="contact" element={<Contact />} />
          <Route path="get-started" element={<GetStarted />} />

        </Route>

      </Routes>
    </BrowserRouter>
  )
}