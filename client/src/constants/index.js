import {
    Home,
    PieChart,
    Wallet,
    History,
} from 'lucide-react';


export const sidebarLinks = [

    { id: 'dashboard', label: 'Dashboard', icon: Home, route: "/dashboard" },
    { id: 'transactions', label: 'Transactions', icon: History, route: "/transactions" },
    { id: 'analytics', label: 'Analytics', icon: PieChart, route: "/analytics" },
    { id: 'budgets', label: 'Budgets', icon: Wallet, route: 'budgets' },
];

