import { Navigate, Route, Routes } from 'react-router-dom'
import { HomePage, ErrorPage, Dashboard, Transactions, Analytics, Budgets } from '../pages'
import ProtectedRouteLayout from '../pages/ProtectedRouteLayout'
import AuthLayout from '../components/layout/AuthLayout'

const AppRoute = () => {
    return (
        <>
            <main>
                <Routes>
                    <Route path="/404" element={<ErrorPage />} /> {/* 404 page */}
                    <Route path="*" element={<Navigate to="/404" />} /> {/* Redirect to 404 */}

                    {/* public routes */}
                    <Route element={<AuthLayout />}>
                        <Route index element={< HomePage />} />
                    </Route>

                    {/* Private routes */}
                    <Route element={<ProtectedRouteLayout />}>
                        <Route path='/dashboard' element={<Dashboard />}></Route>
                        <Route path='/analytics' element={<Analytics />}></Route>
                        <Route path='/transactions' element={<Transactions />}></Route>
                        <Route path='/budgets' element={<Budgets />}></Route>
                    </Route>
                </Routes>
            </main>
        </>
    )
}

export default AppRoute