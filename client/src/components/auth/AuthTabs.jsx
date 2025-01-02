import { useState } from 'react'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import  EmailSignupForm  from './EmailSignupForm'
import EmailLoginForm  from './EmailLoginForm'
import SocialAuth from './SocialAuth'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const AuthTabs = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className='w-full max-w-md px-4 py-8 sm:px-0'>

      <TabGroup selectedIndex={selectedIndex} onChange={setSelectedIndex}>
        <TabList className="flex space-x-1 rounded-xl bg-blue-900/50 p-1">

          <Tab className={({ selected }) =>
            classNames(
              'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
              'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
              selected ? 'bg-white text-blue-700 shadow' : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
            )}>
            Sign In
          </Tab>
          <Tab className={({ selected }) =>
            classNames(
              'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
              'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
              selected
                ? 'bg-white text-blue-700 shadow'
                : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
            )
          }>
            SignUp
          </Tab>
        </TabList>
        <TabPanels className="mt-6">
          <TabPanel>
            <div className='space-y-6'>
              <SocialAuth />
              <div className='relative'>
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">Or continue with</span>
                </div>
              </div>
              <EmailLoginForm />
            </div>
          </TabPanel>

          <TabPanel>
            <div className='space-y-6'>
              <SocialAuth />
              <div className='relative'>
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">Or continue with</span>
                </div>
              </div>
              <EmailSignupForm />
            </div>
          </TabPanel>
        </TabPanels>
      </TabGroup>

    </div>
  )
}

export default AuthTabs