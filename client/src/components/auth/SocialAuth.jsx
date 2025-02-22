import { useGoogleLogin } from '@react-oauth/google';
import AuthContext from '../../context/AuthContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom'


const SocialAuth = () => {
    const navigate = useNavigate()
    const { googleLogin } = useContext(AuthContext)

    const handleGoogleLogin = useGoogleLogin({

        onSuccess: async (tokenResponse) => {
            try {
                const access_token = tokenResponse.access_token
                await googleLogin(access_token)
                navigate('/dashboard')
            }
            catch (error) {
                console.log(error)
            }
        },
        onError: () => {
            alert("Google login failed, please try again")
        }
    })


    return (
        <div className='space-y-3'>
            <button
                onClick={() => handleGoogleLogin()}
                className="w-full flex items-center justify-center space-x-2 py-2 px-4 border border-gray-300 
                rounded-lg shadow-sm text-sm font-medium text-gray-700 bg-white
                hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
                <img
                    src="https://www.google.com/favicon.ico"
                    alt="Google"
                    className="w-5 h-5"
                />
                <span>Continue with Google</span>

            </button>
        </div>
    )
}

export default SocialAuth