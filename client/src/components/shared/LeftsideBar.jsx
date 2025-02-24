import { useContext } from 'react'
import { sidebarLinks } from '../../constants/index'
import { Link, NavLink, useLocation } from 'react-router-dom'
import AuthContext from '../../context/AuthContext'
import {
    LogOut,
    Wallet
} from 'lucide-react';
const LeftsideBar = () => {

    const { pathname } = useLocation()
    const { logout } = useContext(AuthContext)

    return (
        <div className="w-64 bg-white h-screen fixed left-0 top-0 border-r border-gray-200">
            <Link to="/dashboard" className="flex items-center space-x-3 p-6 border-b border-gray-200">
                <div className="p-2 bg-blue-100 rounded-lg">
                    <Wallet className="w-6 h-6 text-blue-600" />
                </div>
                <span className="text-xl font-bold text-gray-800">DailyFinFlow</span>
            </Link>

            <nav className="p-4 space-y-2">

                <ul>
                    {sidebarLinks.map((link) => {
                        const isActive = pathname === link.route
                        const Icon = link.icon

                        return (
                            <li key={link.id}>
                                <NavLink to={link.route}
                                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${isActive
                                        ? 'bg-blue-50 text-blue-600'
                                        : 'text-gray-600 hover:bg-gray-50'
                                        }`}
                                >
                                    <Icon className="w-5 h-5" />
                                    <span>{link.label}</span>
                                </NavLink>
                            </li>
                        )
                    })}

                </ul>

            </nav>

            <div className="absolute bottom-0 left-0 right-0 p-4">
                <button
                    onClick={logout}
                    className="w-full flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
                >
                    <LogOut className="w-5 h-5" />
                    <span>Logout</span>
                </button>
            </div>
        </div>
    )
}

export default LeftsideBar