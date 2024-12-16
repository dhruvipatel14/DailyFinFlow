import React from 'react'
import HeroContent from './HeroContent'
import HeroFeatures from './HeroFeatures'
import BackgroundDeco from './BackgroundDeco'




const HeroSection = () => {
  return (
    <div className='relative bg-gradient-to-br from-blue-50 to-indigo-50 overflow-hidden'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative pt-32 pb-16 sm:pb-24" >
          <HeroContent />
          <HeroFeatures />
        </div>
      </div>

      <BackgroundDeco />

    </div>
  )
}

export default HeroSection