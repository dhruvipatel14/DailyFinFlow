import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { HomePage, ErrorPage, Dashboard } from '../pages'

const AppRoute = () => {
    return (
        <>
            <main className='flex h-screen'>
                <Routes>
                    {/* public routes */}
                    <Route index element={< HomePage />} />

                    <Route path="/404" element={<ErrorPage />} /> {/* 404 page */}
                    <Route path="*" element={<Navigate to="/404" />} /> {/* Redirect to 404 */}

                    {/* Private routes */}
                    <Route>
                        <Route path='dashboard' element={<Dashboard />}></Route>
                    </Route>
                   
                </Routes>
            </main>



        </>

    )
}

export default AppRoute