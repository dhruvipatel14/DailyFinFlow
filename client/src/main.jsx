import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google';
import { AuthProvider } from './context/AuthContext'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <AuthProvider>
    <GoogleOAuthProvider clientId="259136875604-l0db1hkhh2rodds3nn93a1124nd9r0gb.apps.googleusercontent.com">
        <App />
      </GoogleOAuthProvider>
    </AuthProvider>
     
    </BrowserRouter>
  </StrictMode>
)
