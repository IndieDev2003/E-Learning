import React from 'react'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SearchCourses from './components/SearchCourses'
import Benefits from './components/Benefits'
import PopularCourses from './components/PopularCourses'
import Instructor from './components/Instructor'
import Testimonials from './components/Testimonials'
import Newsletter from './components/Newsletter'

function App() {
  return (
    <div className='overflow-x-hidden'>
      <Navbar />
      <Hero />
      <SearchCourses />
      <Benefits />
      <PopularCourses />
      <Instructor />
      <Testimonials />
      <Newsletter/>
    </div>
  )
}

export default App