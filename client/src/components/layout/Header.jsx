import React, { useState } from 'react'
import { Wallet, Menu, X } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuItems = [
    { label: 'Features', href: '#features' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },

  ]

  return (
    <>
      <header className='fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-200'>
        <nav className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='justify-between flex items-center h-16'>

            {/* logo */}

            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">

                <Wallet className='h-8 w-8 text-blue-600' />

                <span className="ml-2 text-xl font-bold text-gray-900">DailyFinFlow</span>

              </div>
            </div>

            {/* Desktop navigation */}

            <div className='hidden md:flex items-center space-x-8'>
              {menuItems.map((item) => (
                <a
                  href={item.href}
                  key={item.label}
                  className='text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium'
                >
                  {item.label}
                </a>
              ))}

              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                Get Started
              </button>
            </div>


            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
              >
                {isMenuOpen ? (
                  <X className="block h-6 w-6" />
                ) : (
                  <Menu className="block h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="pt-2 pb-3 space-y-1">
                {menuItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  >
                    {item.label}
                  </a>
                ))}
                <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                  Get Started
                </button>
              </div>
            </div>
          )}
        </nav>
      </header>

    </>
  )
}

export default Header