import { Outlet, Navigate } from "react-router-dom";
import { useContext } from "react"
import Loader from "../shared/Loader";
import AuthContext from "../../context/AuthContext";

const AuthLayout = () => {
    const { user, loading } = useContext(AuthContext)

    if (loading) {
        return <Loader />
    }

    return (
        <>
            {
                user ? (<Navigate to="/dashboard" />) : (<Outlet />)
            }
        </>
    )
}

export default AuthLayout