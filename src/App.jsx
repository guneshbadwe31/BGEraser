import React from 'react'
import RemoveBackground from './components/RemoveBackground'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default function App() {
  return (
    <div>
      <Navbar />
        <div className='h-screen'>
          <RemoveBackground />
        </div>
      <Footer />
    </div>
  )
}

