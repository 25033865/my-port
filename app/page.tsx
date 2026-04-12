import React from 'react'
import Navbar from './componets/navbar'
import Background from './componets/background'
import Profile from './componets/profile'
import Cousour from './componets/cousour'

const page = () => {
  return (
    <div id="portfolio-root" className="relative min-h-screen">
      <Cousour />
      <Navbar />
      <Background />
      <Profile />
    </div>
  )
}

export default page
