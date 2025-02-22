import React, { useContext } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { HomePage, ErrorPage, Dashboard } from '../pages'
import PrivateRoute from '../pages/PrivateRoute'
import { AuthContext } from '../context/AuthContext'

const AppRoute = () => {
    const { user, loading } = useContext(AuthContext)

    if (loading) {
        return <div>Loading........</div>
    }

    return (
        <>
            <main>
                <Routes>
                    {/* public routes */}
                    <Route index element={user ? <Navigate to='/dashboard' /> : < HomePage />} />

                    <Route path="/404" element={<ErrorPage />} /> {/* 404 page */}
                    <Route path="*" element={<Navigate to="/404" />} /> {/* Redirect to 404 */}

                    {/* Private routes */}
                    <Route>
                        <Route path='/dashboard' element={
                            user ? (
                                <PrivateRoute>
                                    <Dashboard />
                                </PrivateRoute>) : (<Navigate to='/' />)
                        }></Route>
                    </Route>
                </Routes>
            </main>
        </>
    )
}

export default AppRoute