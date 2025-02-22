import { useContext } from 'react'
import { Mail, Lock, User } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { AuthContext } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'

const EmailSignupForm = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm()
  const { signup } = useContext(AuthContext)
  const navigate = useNavigate()

  const onSubmit = async (data) => {
    try {
      await signup(data.email, data.password, data.name)
      navigate('/dashboard')
    }
    catch (err) {
      console.error('Signup failed', err)
    }
  }

  return (
    <form className='space-y-4' onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Full Name
        </label>
        <div className="mt-1 relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <User className="h-5 w-5 text-gray-400" />
          </div>
          <input
            id="name"
            name="name"
            type="text"
            className="pl-10 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="John Doe"
            {
            ...register("name", { required: 'Full Name is required', maxLength: 50 })
            }
          />
        </div>
        {errors.name && <p className="text-red-500 text-sm mt-2">{errors.name.message}</p>}

      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <div className="mt-1 relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Mail className="h-5 w-5 text-gray-400" />
          </div>
          <input type="email"
            name="email"
            id='email'
            placeholder='email@example.com'
            className="pl-10 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
            {
            ...register("email", {
              required: 'Email is required.',
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: 'Invalid email format'
              }
            })
            }
          />

        </div>
        {errors.email && <p className="text-red-500 text-sm mt-2">{errors.email.message}</p>}
      </div>
      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
          Password
        </label>

        <div className="mt-1 relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Lock className="h-5 w-5 text-gray-400" />
          </div>
          <input
            id="password"
            name="password"
            type="password"
            className="pl-10 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="••••••••"
            {
            ...register("password", {
              required: 'Password is required',
              minLength: {
                value: 6,
                message: 'Password must be at least 6 characters',
              },
            })
            }
          />
        </div>
        {errors.password && <p className="text-red-500 text-sm mt-2">{errors.password.message}</p>}
      </div>

      <div>
        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
          Confirm Password
        </label>

        <div className="mt-1 relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Lock className="h-5 w-5 text-gray-400" />
          </div>
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            className="pl-10 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="••••••••"
            {
            ...register("confirmPassword", {
              required: 'Please confirm your password',
              validate: (value) => value === watch('password') || 'Passwords do not match'

            })
            }
          />
        </div>
        {errors.confirmPassword && <p className="text-red-500 text-sm mt-2">{errors.confirmPassword.message}</p>}

      </div>

      <button
        type='submit'
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white
         bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        Sign Up
      </button>
    </form>
  )
}

export default EmailSignupForm

