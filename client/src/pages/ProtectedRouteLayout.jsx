import { useContext } from "react"
import AuthContext from "../context/AuthContext"
import { Navigate, Outlet } from "react-router-dom"
import LeftsideBar from "../components/shared/LeftsideBar"

const ProtectedRouteLayout = () => {
    return (
        <div className="w-full md:flex">
            <LeftsideBar />

            <section className="flex flex-1 h-full">
                <Outlet />
            </section>
        </div>
    )

}

export default ProtectedRouteLayout

