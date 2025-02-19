const API_BASE_URL = "http://localhost:5000/api"

export const ENDPOINTS = {
    SIGNUP : `${API_BASE_URL}/auth/signup`,
    LOGIN : `${API_BASE_URL}/auth/login`,
    GOOGLE_AUTH : `${API_BASE_URL}/auth/google`,
    USER_PROFILE : `${API_BASE_URL}/user/profile`
}