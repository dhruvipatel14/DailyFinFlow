import React from 'react'
import { Shield } from 'lucide-react'
import AuthTabs from './AuthTabs'

const AuthCard = () => {
  return (
    <div className='max-w-md mx-auto px-4 py-12'>
      <div className='bg-white/80 backdrop-blur-md py-8 px-4 shadow-lg rounded-2xl sm:px-10'>
          <div className='flex justify-center mb-6'>
              <div className='p-2 bg-blue-100 rounded-lg'>  
                <Shield className='w-12 h-12 text-blue-600'/>
              </div>
          </div>
          <h2 className="mt-2 text-center text-3xl font-extrabold text-gray-900">
            Get Started Today
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600 mb-8">
            Join thousands of users managing their finances smarter
          </p>
          <AuthTabs />
      </div>

    </div>
  )
}

export default AuthCard