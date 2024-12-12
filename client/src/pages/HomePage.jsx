import React from 'react'
import Header from '../components/layout/Header'
import HeroSection from '../components/hero/HeroSection'
import Features from '../components/hero/Features'
import Footer from '../components/layout/Footer'

const HomePage = () => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50'>
      <Header />
      
      <main className='pt-16'>
        <HeroSection />
        <Features />
      </main>
      
      <Footer />

    </div>

  )
}

export default HomePage