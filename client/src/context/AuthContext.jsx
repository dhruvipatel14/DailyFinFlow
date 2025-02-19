import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { ENDPOINTS } from "../config";
import { useNavigate } from "react-router-dom";


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [token, setToken] = useState(localStorage.getItem('accessToken'));
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate()

    useEffect(() => {

        const checkAuth = async () => {
            if (token) {
                axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
                await getUserProfile()
            }
            setLoading(false)
        }

        checkAuth()
    }, [token])


    const getUserProfile = async () => {
        try {
            const res = await axios.get(ENDPOINTS.USER_PROFILE)
            setUser(res.data.user)
            navigate('/dashboard');
        }
        catch (err) {
            console.log('Error while fetching user profile', err)
            logout()
        }
    }

    const login = async (email, password) => {
        try {
            const res = await axios.post(ENDPOINTS.LOGIN, { email, password })
            const { token } = res.data
            localStorage.setItem('accessToken', token)
            setToken(token)
        }
        catch (err) {
            console.log('Login failed', err.res?.data)
        }
    }

    const signup = async (email, password, name) => {
        try {
            const res = await axios.post(ENDPOINTS.SIGNUP, { email, password, name })
            const { token } = res.data
            localStorage.setItem('accessToken', token)
            setToken(token)
        }
        catch (err) {
            console.log('Signup failed', err.res?.data)
        }
    }

    const googleLogin = async (access_token) => {
        try {
            const res = await axios.post(ENDPOINTS.GOOGLE_AUTH, {
                token: access_token
            })
            const accessToken = res.data.accessToken
            localStorage.setItem('accessToken', token)
            setToken(accessToken)
        }
        catch (err) {
            console.log('Google login failed', err)
        }
    }

    const logout = () => {
        localStorage.removeItem('accessToken')
        setToken(null)
        setUser(null)
        delete axios.defaults.headers.common['Authorization']
        navigate('/')
    }

    return (

        <AuthContext.Provider value={{ user, login, signup, googleLogin, logout, token, loading }} >
            {children}
        </AuthContext.Provider>
    )
}


export default AuthContext;
